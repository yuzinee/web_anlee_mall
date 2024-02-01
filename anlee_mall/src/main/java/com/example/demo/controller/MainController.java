package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainController {
	
	// 메인화면
	@RequestMapping(value = "/", method = RequestMethod.GET)
    public String startController() {
		
        return "main/login";
    }
	
	// 화면 전환
	@RequestMapping("/{url1}/{url2}")
    public String otherController(@PathVariable("url1") String url1, String url2) {
       
        return url1 + "/" + url2;
    }
}