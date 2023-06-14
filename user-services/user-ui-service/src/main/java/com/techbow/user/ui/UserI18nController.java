package com.techbow.user.ui;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/locale")
public class UserI18nController {
    @Autowired
    private UserI18nService i18nService;

    @GetMapping("/{locale}")
    public Object getLocaleResource(@PathVariable String locale) {
        return i18nService.getLocale(locale);
    }
}

