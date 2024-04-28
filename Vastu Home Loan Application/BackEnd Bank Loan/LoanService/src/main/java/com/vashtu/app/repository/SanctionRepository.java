package com.vashtu.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vashtu.app.model.Sanction;

public interface SanctionRepository extends JpaRepository<Sanction, Integer> {

}
