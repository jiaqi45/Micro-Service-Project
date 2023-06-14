package com.techbow.gateway;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fallback")
public class GatewayFallbackRestController {
    @RequestMapping
    public String fallback() {
        return "We are facing some issues (T_T), please come back later.";
    }
}

