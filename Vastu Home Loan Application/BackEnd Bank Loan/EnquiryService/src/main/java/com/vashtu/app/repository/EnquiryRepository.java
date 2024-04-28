package com.vashtu.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vashtu.app.model.EnquiryForm;
@Repository
public interface EnquiryRepository extends JpaRepository<EnquiryForm, Integer>{

}
