package lib;

import com.sun.net.httpserver.HttpHandler;

public abstract class RestHandler implements HttpHandler{
    String route;
    
    public void handler () {}
}
