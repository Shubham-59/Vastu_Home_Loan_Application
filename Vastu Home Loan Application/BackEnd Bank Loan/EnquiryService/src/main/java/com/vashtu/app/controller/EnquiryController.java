package com.vashtu.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vashtu.app.model.EnquiryForm;
import com.vashtu.app.service.EnquiryService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin("*")
@RequestMapping("/enquiry")
public class EnquiryController {

	@Autowired
	private EnquiryService enquiryService;
    
	@PostMapping("/save_enquiryinfo")
	public ResponseEntity<EnquiryForm> saveCustomerEnquiryDetailes(@Valid @RequestBody EnquiryForm enquiry) 
	{
		return new ResponseEntity<EnquiryForm>(enquiryService.saveCustomerEnquiryinfo(enquiry), HttpStatus.CREATED);
	}

	@GetMapping("/getAllEnquiryData")
	public ResponseEntity<List<EnquiryForm>> getAllEnquiryDetailes()
	{
		List<EnquiryForm>listEnquiry=enquiryService.getAllEnquiryDetailes();
	           return new ResponseEntity<List<EnquiryForm>>(listEnquiry, HttpStatus.OK) ;
	}
	@GetMapping("/getEnquiry_ById")
	public ResponseEntity<EnquiryForm> getEnqiuryById(@PathVariable int enquiryId)
	{
		
	return new ResponseEntity<EnquiryForm>(enquiryService,HttpStatus.OK);
	}
	
}
