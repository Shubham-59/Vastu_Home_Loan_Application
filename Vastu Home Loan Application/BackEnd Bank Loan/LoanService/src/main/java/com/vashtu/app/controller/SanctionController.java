package com.vashtu.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vashtu.app.model.Sanction;
import com.vashtu.app.service.SanctionService;

@RestController
@CrossOrigin("*")
public class SanctionController {

	@Autowired private SanctionService sanctionService;
	
	@GetMapping("/sanctiondatasave")
	public ResponseEntity<Sanction> saveLoanSanctionInfo()
	{
	return new ResponseEntity<Sanction>(sanctionService.saveLoanSanctionInfo(),HttpStatus.OK);
	}
}
