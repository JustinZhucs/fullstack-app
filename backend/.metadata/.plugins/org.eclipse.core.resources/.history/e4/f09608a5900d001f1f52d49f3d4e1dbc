package com.huadian.pbmgmt.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.stereotype.Repository;

import com.huadian.pbmgmt.entities.Product;

@Repository
public class ProductDaoMySQLImpl implements ProductDao {
	
	static final String DB_URL = "jdbc:mysql://localhost:3306/huadiandb";
	static final String USER = "root";
	static final String PASS = "12345678";
	
	private Connection conn;

	
	ProductDaoMySQLImpl() throws SQLException {
		this.conn = DriverManager.getConnection(DB_URL, USER, PASS);
	}
	
	@Override
	public void createProductTransaction(Product product) throws DaoException {

		try (PreparedStatement pStmt = conn.prepareStatement("INSERT INTO ORDERS (PROD_NAME, QUANTITY) VALUES (?, ?)") ){
			pStmt.setString(1, product.getName());
			pStmt.setInt(2, product.getQuantity());
			pStmt.execute();
		} catch (SQLException e) {
			e.printStackTrace();
			throw new DaoException(e);
		}

	}

	@Override
	public int getTotalQuantity(String productName) throws DaoException {

		try (PreparedStatement pStmt = conn.prepareStatement("SELECT SUM(quantity) as TOTAL_COUNT FROM ORDERS WHERE PROD_NAME = ?") ){
			pStmt.setString(1, productName);
			int totalCount = 0;
			ResultSet rs = pStmt.executeQuery();
			if (rs.next()) {
				totalCount = rs.getInt("TOTAL_COUNT");
			}
			return totalCount;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new DaoException(e);
		}
		
	}

}
