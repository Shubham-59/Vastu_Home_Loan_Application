package com.vashtu.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vashtu.app.model.Cibil;
import com.vashtu.app.service.CibilService;

@RestController
@CrossOrigin("*")
@RequestMapping("/cibil")
public class CibilController {
	
	@Autowired private CibilService cibilService;
	
	@GetMapping("/getCibilScore")
	public ResponseEntity<Cibil> getCibilScore()
	{
		
				Cibil cibil=cibilService.getCibilScore();
				
				return new ResponseEntity<Cibil>(cibil,HttpStatus.OK);
	}

}
