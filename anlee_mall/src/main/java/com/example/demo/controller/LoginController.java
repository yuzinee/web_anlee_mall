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

		// 비밀번호 암호화
		String password = (String) param.get("password");
		param.put("password", passwordEncoder.encode(password));
		
		insertMap.put("param", param);
		
		mainService.insert(queryId, insertMap);
    }
	
	// 로그인
	@RequestMapping(value = "/login/selectLogin", method = RequestMethod.POST, consumes = "application/json")
	@ResponseBody 
	public Map<String, Object> selectLogin(@RequestBody Map<String, Object> selectMap) throws Exception {
	    String queryId = (String) selectMap.get("queryId"); // 쿼리 ID
	    Map<String, Object> selectInfo = mainService.selectOne(queryId, selectMap);
	    
	    String inputPassword = (String) selectMap.get("password");
	    String storedPassword = (String) selectInfo.get("USER_PSWRD");
	    
	    boolean passwordMatches = passwordEncoder.matches(inputPassword, storedPassword);
	    
	    if(passwordMatches) {
	    	selectInfo.put("result", "S");
	    } else {
	    	selectInfo.put("result", "F");
	    }

	    return selectInfo;
	}
}