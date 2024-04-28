package com.vashtu.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vashtu.app.model.EnquiryForm;
import com.vashtu.app.repository.EnquiryRepository;

@Service
public class EnquiryServiceimpl implements EnquiryService{
	@Autowired
	private EnquiryRepository enquiryRepo;

	@Override
	public EnquiryForm saveCustomerEnquiryinfo(EnquiryForm enquiry) 
	{
		EnquiryForm enq=enquiryRepo.save(enquiry);
		return enq;
	
		
	}

	@Override
	public List<EnquiryForm> getAllEnquiryDetailes() {
		List<EnquiryForm>listEnquiry=enquiryRepo.findAll();
		return listEnquiry;
	}

	@Override
	public Object getEnquiryById(int enquiryId) {
		Optional<EnquiryForm>opEnquiry=enquiryRepo.findById(enquiryId);
		if(opEnquiry.isPresent()) {
			
			EnquiryForm enquiryDetailes=opEnquiry.get();
			return enquiryDetailes;
		}
		return null;
	}

}
