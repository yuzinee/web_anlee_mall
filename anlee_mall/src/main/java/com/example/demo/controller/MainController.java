package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.example.demo.service.MainService;


/**
 * @Description : 메인 컨트롤러
 * @author : 이유진
 * @ since : 2023.12.28
 * */

@Controller
public class MainController {
	
	@Autowired
	MainService mainService;
	
	// 메인화면
	@RequestMapping(value = "/", method = RequestMethod.GET)
    public String startController() {
		
        return "login";
    }
	
	// 화면 전환
	@RequestMapping("/{url}")
	public String otherController(@PathVariable("url") String url, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		
		if (!url.startsWith("user_") && !url.startsWith("manage_") && !url.startsWith("login_")) {
	 
	        return "/user_home"; // 또는 다른 처리를 수행할 수 있음
	    }
		
	    if (url.startsWith("user_")) {
	    	
	        return url; // user_ 로 시작하는 URL은 세션 상관없이 페이지 전환
	    }
	    
	    if (url.startsWith("manage_")&&(session == null || session.getAttribute("userId") == null)) {

	    	return "/login"; // 세션이 없거나 사용자 아이디가 없는 경우 로그인 페이지로 이동
	    } else {
	        	
	        return url; // 세션이 있고 사용자 아이디가 있는 경우 요청된 URL로 이동
	    }
	}

	// 단건 조회
	@RequestMapping(value = "/main/selectOne", method = RequestMethod.POST, consumes = "application/json")
    @ResponseBody 
    public Map<String, Object> selectOne(@RequestBody Map<String, Object> selectMap) throws Exception {
		String queryId = (String) selectMap.get("queryId"); // 쿼리 ID
        Map<String, Object> selectInfo = mainService.selectOne(queryId, selectMap);
        
        return selectInfo;
    }
	
	// 리스트 조회
	@RequestMapping(value = "/main/selectList", method = RequestMethod.POST, consumes = "application/json")
    @ResponseBody 
    public List<Object> selectList(@RequestBody Map<String, Object> selectMap) throws Exception {
		String queryId = (String) selectMap.get("queryId"); // 쿼리 ID
		List<Object> selectInfo = mainService.selectList(queryId, selectMap);
        
        return selectInfo;
    }
	
	// 등록
	@RequestMapping(value = "/main/insert", method = RequestMethod.POST, consumes = "application/json")
    @ResponseBody 
    public void insert(@RequestBody Map<String, Object> insertMap) throws Exception {
		String queryId = (String) insertMap.get("queryId"); // 쿼리 ID
		
		mainService.insert(queryId, insertMap);
    }
	
	// 수정
	@RequestMapping(value = "/main/update", method = RequestMethod.POST, consumes = "application/json")
    @ResponseBody 
    public void update(@RequestBody Map<String, Object> updateMap) throws Exception {
		String queryId = (String) updateMap.get("queryId"); // 쿼리 ID
		
		mainService.update(queryId, updateMap);
    }
	
	// 삭제
	@RequestMapping(value = "/main/delete", method = RequestMethod.POST, consumes = "application/json")
    @ResponseBody 
    public void delete(@RequestBody Map<String, Object> deleteMap) throws Exception {
		String queryId = (String) deleteMap.get("queryId"); // 쿼리 ID
		
		mainService.delete(queryId, deleteMap);
    }
}