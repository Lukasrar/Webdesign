import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = {"/Servlet"})
public class Servlet extends HttpServlet {

    String jogador1 = "";
    String jogador2 = "";
    String table = "a,a,a,a,a,a,a,a,a";
    String vez = "1";
    String vencedor = "";
    int contador = 0;
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
            contador++;
            jogador1 = request.getParameter("player1");
            jogador2 = request.getParameter("player2");
            table = request.getParameter("table");
            vez = request.getParameter("vez");
            vencedor = request.getParameter("vencedor");
            
            request.setAttribute("player1", jogador1);
            request.setAttribute("player2", jogador2);
            request.setAttribute("table", table);
            request.setAttribute("vez", vez);
            request.setAttribute("vencedor", vencedor);
            if(contador == 10){
                request.getRequestDispatcher("velha.jsp").forward(request, response);
            } else if(vencedor.equalsIgnoreCase("f")){
                request.getRequestDispatcher("jogador.jsp").forward(request, response);
            } else {
                request.getRequestDispatcher("vencedor.jsp").forward(request, response);
            }
            
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
