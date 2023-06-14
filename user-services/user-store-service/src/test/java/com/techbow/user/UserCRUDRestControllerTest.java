package com.techbow.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.junit.jupiter.api.Assertions.*;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import static org.mockito.Mockito.*;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = UserCRUDRestController.class)
class UserCRUDRestControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private UserStoreService userStoreService;

    @Test
    void whenEmptyInput() throws Exception {
        mockMvc.perform(post("/user/").contentType("application/json")).andExpect(status().isBadRequest());
    }

    @Test
    void whenValidInput() throws Exception {
        User user = new User();
        user.setName("Phil");
        user.setEmail("phil@email.com");

        mockMvc.perform(post("/user/")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(user))
        ).andExpect(status().isOk());
    }

    @Test
    void whenInvalidInput() throws Exception {
        User user = new User();
        user.setName("Phil");
        user.setEmail(null);

        mockMvc.perform(post("/user/")
               .contentType("application/json")
                .content(objectMapper.writeValueAsString(user))
        ).andExpect(status().isBadRequest());
    }

    @Test
    void testCreateUserInvocation() throws Exception {
        User user = new User();
        user.setName("Phil");
        user.setEmail("phil@email.com");

        mockMvc.perform(post("/user/")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(user))
        ).andExpect(status().isOk());

        ArgumentCaptor<User> captor = ArgumentCaptor.forClass(User.class);
        verify(userStoreService, times(1)).saveUser(captor.capture());

        assertThat(captor.getValue().getName()).isEqualTo("Phil");
        assertThat(captor.getValue().getEmail()).isEqualTo("phil@email.com");
    }

    @Test
    void testSerializedOutput() throws Exception {
        User user = new User();
        user.setName("Phil");
        user.setEmail("phil@email.com");

        when(userStoreService.saveUser(any())).thenAnswer(
                invocation -> invocation.getArguments()[0]
        );

        MvcResult mvcResult = mockMvc.perform(post("/user/")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(user))
        ).andExpect(status().isOk()).andReturn();

        String expectedResponseBody = objectMapper.writeValueAsString(user);
        String actualResponseBody = mvcResult.getResponse().getContentAsString();
        assertThat(expectedResponseBody).isEqualToIgnoringWhitespace(actualResponseBody);
    }


}