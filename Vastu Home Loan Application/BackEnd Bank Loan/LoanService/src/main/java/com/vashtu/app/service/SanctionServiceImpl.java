package com.vashtu.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.vashtu.app.model.Customer;
import com.vashtu.app.model.Sanction;
import com.vashtu.app.repository.SanctionRepository;

@Service
public class SanctionServiceImpl implements SanctionService {

	@Autowired
	private SanctionRepository sanctionRepo;
	
	@Autowired
	private RestTemplate rest;
	@Override
	public Sanction saveLoanSanctionInfo() {
		/*
		 * String url="http://localhost:8083/getAllLoanApplicationData"; Customer[]
		 * customers = rest.getForObject(url, Customer[].class); if(customers!=null) {
		 * 
		 * for(Customer customer:customers) {
		 * 
		 * if (customer.getCibilScore() >= 650 && customer.getCibilScore() <= 750)
		 * if(customer.getSalery()>50000 && customer.getSalery() <=100000)
		 * if(customer.getRequireTenure() >=3 && customer.getRequireTenure()<=5)
		 * if(customer.getRequestedLoanAmount()>=500000 &&
		 * customer.getRequestedLoanAmount() <=800000) { Sanction sanction = new
		 * Sanction(); sanction.setRateOfInterest(7%);
		 * sanction.setFirstName(customer.getFirstName());
		 * sanction.setLoanAmountSanctioned(customer.getRequestedLoanAmount());
		 * sanction.setTenure(customer.getRequireTenure());
		 * 
		 * } } }
		 */
//		return null;
	
		 String url = "http://localhost:8083/getAllLoanApplicationData";
	        Customer[] customers = rest.getForObject(url, Customer[].class);
	        
	        if (customers != null && customers.length > 0) {
	            System.out.println("Data retrieved successfully. Total customers: " + customers.length);
	        }

	        if (customers != null) {
	            for (Customer customer : customers) {
	                if (isEligibleForLoan(customer)) {
	                    Sanction sanction = calculateSanction(customer);
	                    if (sanction != null) {
	                        sanctionRepo.save(sanction); 
	                        
	                        // Save the Sanction with associated Customer
	                       
	                    }
	                }
	            }
	        }
			return null;
	    }

	    // Method to check eligibility based on specified conditions
	    private boolean isEligibleForLoan(Customer customer) {
	        return customer.getCibilScore() >= 650 &&
	               customer.getCibilScore() <= 750 &&
	               customer.getSalery() > 50000 &&
	               customer.getSalery() <= 100000 &&
	               customer.getRequireTenure() >= 3 &&
	               customer.getRequireTenure() <= 5 &&
	               customer.getRequestedLoanAmount() >= 500000 &&
	               customer.getRequestedLoanAmount() <= 800000;
	    }

	    // Method to calculate and create Sanction object
	    private Sanction calculateSanction(Customer customer) {
	        Sanction sanction = new Sanction();
	        sanction.setFirstName(customer.getFirstName());
	        sanction.setLoanAmountSanctioned(customer.getRequestedLoanAmount());
	        sanction.setTenure(customer.getRequireTenure());

	        // Calculate rate of interest based on CIBIL score
	        double rateOfInterest = calculateInterestRate(customer.getCibilScore());
	        sanction.setRateOfInterest(rateOfInterest);

	        // Calculate monthly EMI amount
	        double monthlyEmiAmount = calculateMonthlyEmi(customer.getRequestedLoanAmount(), customer.getRequireTenure(), rateOfInterest);
	        sanction.setMonthlyEmiAmount(monthlyEmiAmount);

	        return sanction;
	    }

	    // Method to calculate interest rate based on CIBIL score
	    private double calculateInterestRate(int cibilScore) {
	        if (cibilScore >= 650 && cibilScore < 700) {
	            return 7.5; // 7.5% interest rate for CIBIL score between 650 and 699
	        } else if (cibilScore >= 700 && cibilScore <= 750) {
	            return 7.0; // 7.0% interest rate for CIBIL score between 700 and 750
	        } else {
	            return 0.0; // Default interest rate or handle other ranges as needed
	        }
	    }

	    // Method to calculate monthly EMI amount
	    private double calculateMonthlyEmi(double loanAmount, int tenure, double rateOfInterest) {
	        // Formula to calculate EMI: EMI = [P * r * (1 + r)^n] / [(1 + r)^n - 1]
	        double monthlyInterestRate = rateOfInterest / (12 * 100); // Convert annual interest rate to monthly
	        int totalMonths = tenure * 12;
	        double emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
	                     (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
	        return emi;
	    }
	}


