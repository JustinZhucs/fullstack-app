package com.huadian.pbmgmt.entities;

public class LoginResult {
	private boolean status;
	private String firstName;
	private String lastName;
	public LoginResult() {
		super();
		// TODO Auto-generated constructor stub
	}
	public LoginResult(boolean status, String firstName, String lastName) {
		super();
		this.status = status;
		this.firstName = firstName;
		this.lastName = lastName;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	@Override
	public String toString() {
		return "LoginResult [status=" + status + ", firstName=" + firstName + ", lastName=" + lastName + "]";
	}
	
	
}
