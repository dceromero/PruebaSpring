package com.example.demo.model.entitys;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name="clientes")
public class Cliente implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String nombres;
	private String apellidos;
	private String mail;
	
	@Column(name="FecCreacion")	
	@Temporal(TemporalType.DATE)
	private Date createAt;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNombres() {
		return nombres;
	}
	public void setNombres(String nombres) {
		this.nombres = nombres;
	}
	public String getApellidos() {
		return apellidos;
	}
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public Date getCreateat() {
		return createAt;
	}
	public void setCreateat(Date createat) {
		createAt = createat;
	}

	private static final long serialVersionUID = 1L;
	
	
}

