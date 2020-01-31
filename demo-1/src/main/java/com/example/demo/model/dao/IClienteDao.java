package com.example.demo.model.dao;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.entitys.Cliente;

public interface IClienteDao extends CrudRepository<Cliente, Long> {

}
