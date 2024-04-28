package com.vashtu.app.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Sanction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int sanctionId;
    private String firstName;
	private String sanctionDate;
	private double loanAmountSanctioned;
	private double rateOfInterest;
	private int tenure;
	private double monthlyEmiAmount;
	@Lob
	@Column(length = 999999999)
	private byte[] sanctionLetter;
//	@OneToOne(cascade = CascadeType.ALL)
//	private Customer customer;
}
