package com.example.demo.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.service.MainService;


/**
 * @Description : 로그인 컨트롤러
 * @author : 이유진
 * @ since : 2024.02.06
 * */

@Controller
public class LoginController {
	
	@Autowired
	MainService mainService;
	
	@Autowired
    PasswordEncoder passwordEncoder;
	
	// 회원가입
	@RequestMapping(value = "/login/insert", method = RequestMethod.POST, consumes = "application/json")
    @ResponseBody 
    public void insert(@RequestBody Map<String, Object> insertMap) throws Exception {
		String queryId = (String) insertMap.get("queryId"); 						// 쿼리ID
		Map<String, Object> param = (Map<String, Object>) insertMap.get("param"); 	// 파라미터
		String password = (String) param.get("password");							// 패스워드
		
		param.put("password", passwordEncoder.encode(password)); // 암호화
		insertMap.put("param", param);
		
		mainService.insert(queryId, insertMap);
    }
}