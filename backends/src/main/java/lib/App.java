package lib;

import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.HashMap;
import java.util.Optional;

public class App {
    HttpServer server;
    HashMap<String, HttpHandler> routes = new HashMap<>();

    public App(Optional <Integer> port) throws IOException {
        server = HttpServer.create(
            new InetSocketAddress(port.orElse(8080)),
            10
        );
    }

    public void listen() {
        server.start();
    }

    public void stop() {
        server.stop(0);
    }
}
