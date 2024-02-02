package com.example.demo.controller;

import java.util.List;
import java.util.Map;
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
	public String otherController(@PathVariable("url") String url) {
	    
        return url;
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