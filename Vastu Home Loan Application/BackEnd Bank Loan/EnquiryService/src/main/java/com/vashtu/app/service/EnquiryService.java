package com.vashtu.app.service;

import java.util.List;

import com.vashtu.app.model.EnquiryForm;

public interface EnquiryService {

	EnquiryForm saveCustomerEnquiryinfo(EnquiryForm enquiry);

	List<EnquiryForm> getAllEnquiryDetailes();

	EnquiryForm getEnquiryById(int enquiryId);
//registred enruired
}
