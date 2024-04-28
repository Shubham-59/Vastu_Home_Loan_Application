package com.vashtu.app.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vashtu.app.model.Cibil;
import com.vashtu.app.repository.CibilRepository;

@Service
public class CibilServiceImpl implements CibilService{
	
	@Autowired private CibilRepository cibilRepository;
	private static final int MIN_SCORE = 550;
    private static final int MAX_SCORE = 900;

	@Override
	public Cibil getCibilScore() {
		
		Random random = new Random();
        int randomCibilScore = random.nextInt(MAX_SCORE - MIN_SCORE + 1) + MIN_SCORE;
        System.out.println("Random CIBIL Score: " + randomCibilScore);
        Cibil cibil = new Cibil();
       
        cibil.setCibilScore(randomCibilScore);

		return cibil;
	}

}
