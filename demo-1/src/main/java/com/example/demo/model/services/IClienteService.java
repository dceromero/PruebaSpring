package com.example.demo.model.services;

import java.util.List;

import com.example.demo.model.entitys.Cliente;

public interface IClienteService  {
	
	public List<Cliente> findAll();
	
	public Cliente findById(Long id);
	
	public Cliente save(Cliente cliente);
	
	public void delete(Long id);
	
}
