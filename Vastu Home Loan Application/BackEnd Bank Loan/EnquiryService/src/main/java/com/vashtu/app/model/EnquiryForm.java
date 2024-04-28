package com.vashtu.app.model;
import java.sql.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class EnquiryForm {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
private int enquiryId;
    
    @NotEmpty
    private String firstName;
    
    @NotEmpty
    private String lastName;
    
    private int age;
    private String address;
    private int pincode;
    
    @NotNull
    private Long mobileNumber;
    
    @Email
    private String email;
    private Date dateOfBirth;
    
    @NotEmpty
    private String panCard;
    
    @NotNull
    private Long adharCard;
    

    @Positive
    private Double requestedLoanAmount;
}
