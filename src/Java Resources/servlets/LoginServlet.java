package servlets;


import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import java.sql.*;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		checkLogin loginCheck = new checkLogin();
		try {
			User user = loginCheck.loginCheck(username, password);
			if(user != null) {
				 String cookieID = username; 
				 Cookie cookie = new Cookie("username", cookieID);
				 cookie.setPath(request.getContextPath());
				 response.addCookie(cookie);
				
			}
			else {
				out.print("Sorry username or password error");  
			}
		}
		catch (SQLException | ClassNotFoundException ex) {
            throw new ServletException(ex);
        }
	}
	

}
