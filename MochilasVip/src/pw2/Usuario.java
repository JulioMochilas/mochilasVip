package pw2;

import java.util.ArrayList;
import java.util.Date;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;
@PersistenceCapable
public class Usuario {
	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	
	private String email;
	
	@Persistent
	private String nombre;
	
	@Persistent
	private String paterno;
	
	@Persistent
	private String materno;
	
	@Persistent
	private int dni;
	
	@Persistent
	private int admin;
	
	@Persistent
	private boolean bloqueado;
	
	@Persistent
	private String img;
	
	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	@Persistent
	public ArrayList<Reserva> reservas = new ArrayList<Reserva>();
	
	@Persistent
	public ArrayList<Historial> historial = new ArrayList<Historial>();

	public Usuario(String email, String nombre, String paterno, String materno,
			int dni, int admin) {
		super();
		this.email = email;
		this.nombre = nombre;
		this.paterno = paterno;
		this.materno = materno;
		this.dni = dni;
		this.admin = admin;
		this.bloqueado = false;
	}

	public String getEmail() {
		return email;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getPaterno() {
		return paterno;
	}

	public void setPaterno(String paterno) {
		this.paterno = paterno;
	}

	public String getMaterno() {
		return materno;
	}

	public void setMaterno(String materno) {
		this.materno = materno;
	}

	public int getDni() {
		return dni;
	}

	public void setDni(int dni) {
		this.dni = dni;
	}

	public int getAdmin() {
		return admin;
	}

	public void setAdmin(int admin) {
		this.admin = admin;
	}

	public ArrayList<Reserva> getReservas() {
		return reservas;
	}

	public void setReservas(ArrayList<Reserva> reservas) {
		this.reservas = reservas;
	}

	public ArrayList<Historial> getHistorial() {
		return historial;
	}

	public void setHistorial(ArrayList<Historial> historial) {
		this.historial = historial;
	}

	public boolean getBloqueado() {
		return bloqueado;
	}

	public void setBloqueado(boolean bloqueado) {
		this.bloqueado = bloqueado;
	}

	@Override
	public String toString() {
		return "Usuario [email=" + email + ", nombre=" + nombre + ", paterno="
				+ paterno + ", materno=" + materno + ", dni=" + dni + ", admin=" + admin + ", reservas=" + reservas
				+ ", historial=" + historial + "]";
	}
}