

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public RegisterServlet() {
        super();
    }
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
        String email = request.getParameter("email");
        String username = request.getParameter("username");
        String password = request.getParameter("password"); 
        try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = null;      
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/csci_final?user=root&password=Matthewwilson033!");
			PreparedStatement statement = con.prepareStatement("SELECT * FROM Users WHERE email = ?");
			statement.setString(1, email);
			ResultSet result = statement.executeQuery();
			if(result.next()) {
				out.println("This email has already been used"); 	
			}
			else {
				 PreparedStatement ps = con.prepareStatement("INSERT INTO Users (username, password, email) VALUES(?,?,?)");
				 ps.setString(1, username);
				 ps.setString(2, password);
				 ps.setString(3, email);
				 ps.executeUpdate();
				 String cookieID = username; 
				 Cookie cookie = new Cookie("username", cookieID);
				 cookie.setPath(request.getContextPath());
				 response.addCookie(cookie);
				 /*
				 RequestDispatcher rd=request.getRequestDispatcher("home.html");  
			     rd.include(request,response);  
			     */	
			}
			
        }
        catch(SQLException e){
        	e.printStackTrace();
        }
        catch(ClassNotFoundException e) {
        	e.printStackTrace();
        }


	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

}
