package pw2;
import java.util.Date;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

/**
 * @author 
 *
 */
@PersistenceCapable
public class Historial {
	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;
	
	@Persistent
	private Date date = new Date();
	
	@Persistent
	public String accion;
	
	@Persistent
	public String ip;
	
	@Persistent
	public String host;

	

	public Historial(String accion, String ip, String host) {
		super();
		this.accion = accion;
		this.ip = ip;
		this.host = host;
	}


	public Key getKey() {
		return key;
	}


	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getAccion() {
		return accion;
	}

	public void setAccion(String accion) {
		this.accion = accion;
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

	public String getHost() {
		return host;
	}

	public void setHost(String host) {
		this.host = host;
	}

	@Override
	public String toString() {
		return "Historial [key=" + key + ", date=" + date + ", accion="
				+ accion + ", ip=" + ip + ", host=" + host + "]";
	}

	
	
}