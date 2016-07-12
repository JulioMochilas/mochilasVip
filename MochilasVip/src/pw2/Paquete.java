package pw2;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable
public class Paquete {

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key id;
	
	@Persistent
	private String nombre;
	
	@Persistent
	private String hora;
	
	@Persistent
	private String numeroPersonas;
	
	@Persistent
	private String ciudad;
	
	@Persistent
	private String fecha;
	
	@Persistent
	private String tipo;
	
	@Persistent
	private String img;
	
	@Persistent
	private String precio;
	
	@Persistent
	private boolean bloqueado;
	
	@Persistent
	private String descripcion;

	

	public Paquete(String nombre,String hora, String numeroPersonas, String ciudad,
			 String fecha, String tipo,String descripcion,String precio, String img) {
		
		super();
		this.nombre=nombre;
		this.hora = hora;
		this.numeroPersonas = numeroPersonas;
		this.ciudad = ciudad;
		this.fecha = fecha;
		this.precio=precio;
		this.tipo = tipo;
		this.descripcion=descripcion;
		this.img=img;
		this.bloqueado=false;
	}

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
	}
	
	public String getPrecio() {
		return precio;
	}

	public void setPrecio(String precio) {
		this.precio = precio;
	}
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getNumeroPersonas() {
		return numeroPersonas;
	}

	public void setNumeroPersonas(String numero) {
		this.numeroPersonas = numero;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String lugar) {
		this.ciudad = lugar;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public String getTipo() {
		return tipo;
	}
	
	public Key getId() {
		return id;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}

	public boolean getBloqueo() {
		return bloqueado;
	}
	public void setBloqueo(boolean bloqueo) {
		this.bloqueado = bloqueo;
	}
	@Override
	public String toString() {
		return "Paquete [codigo=" + id + ", hora=" + hora + ", numero="
				+ numeroPersonas + ", lugar=" + ciudad + ", zona=" + tipo + ", fecha="
				+ fecha + ", tipo=" + tipo + "]";
	}
	
}