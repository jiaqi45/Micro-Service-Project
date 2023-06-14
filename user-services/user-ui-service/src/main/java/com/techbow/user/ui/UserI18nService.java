package com.techbow.user.ui;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserI18nService {
    private static final String URL = "http://user-i18n-service";
    @Autowired
    private RestTemplate restTemplate;

    public Object getLocale(String locale) {
        Map<String, String> urlParams = new HashMap<>();
        urlParams.put("locale", locale);
        UriComponents uriComponents =
                UriComponentsBuilder.fromHttpUrl(URL).path("/locale/{locale}.json")
                        .buildAndExpand(urlParams);
        return restTemplate.getForObject(uriComponents.toUriString(), Object.class);
    }
}

