package pw2;

import java.io.IOException;

import java.util.List;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.persistence.metamodel.SetAttribute;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.*;

@SuppressWarnings("serial")
public class AgenciaServlet extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws IOException, ServletException {
		RequestDispatcher mandar = null ;
		PersistenceManager pm = PMF.get().getPersistenceManager();
			String rest=req.getParameter("rest");
			
			switch (rest){
			case "Agregar-Imagen":
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/anadirImagenPlato.jsp");
				break;
			
			case "inicio":
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/inicio.jsp");
				break;
			
			case "nosotros":
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/nosotros.jsp");
				break;
				
			case "menu":
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/menu.jsp");
				break;
				
			case "ofertas":
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/ofertas.jsp");
				break;
				
			case "hoteles":
				Query q=pm.newQuery(Hospedaje.class);
				List<Hospedaje> lista=(List<Hospedaje>) q.execute();
				req.setAttribute("lista", lista);
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/mostrarHoteles.jsp");
				break;
				
			case "eventos":
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/eventos.jsp");
				break;
				
			case "reservas":
				//Query paquetes= pm.newQuery(Paquete.class);
				//l1.setFilter("bloqueo == emailParam");
				//l1.declareParameters("Boolean emailParam");
				//List<Paquete> listaPaquetes = (List<Paquete>) paquetes.execute();
				//req.setAttribute("lista", listaPaquetes);
				
				
				
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/indexCliente.jsp");
				break;
				
			case "ingresar":
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/ingresar.jsp");
				break;
				
			case "registro":
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/registro.jsp");
				break;
				
			case "registrarse":
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/registrarse.jsp");
				break;
				
			case "salir":
				mandar=getServletContext().getRequestDispatcher("/salirSesion");
				break;
				
			case "cambiar_Pass":
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/cambiar_Pass.jsp");
				break;
				
			case "cambiar_Paterno":
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/cambiar_Paterno.jsp");
				break;
				
			case "cambiar_Nombre":
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/cambiar_Nombre.jsp");
				break;
				
			case "cambiar_Materno":
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/cambiar_Materno.jsp");
				break;
				
			case "eliminarReservas":
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/eliminarReserva.jsp");
				break;
				
			case "indexAdministrador":
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/indexAdministrador.jsp");
				break;
				
			default :
			 	mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/inicio.jsp");	
			break;
			}
			mandar.forward(req, resp);
	}
}