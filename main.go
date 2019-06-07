package main

import (
	"fmt"
	"github.com/gobuffalo/packr/v2"
	"github.com/gorilla/mux"
	"html/template"
	"net/http"
	"time"
)

var appData *packr.Box

func main() {
	appData = packr.New("dist", "./dist")

	server := &http.Server{
		Handler:      createMuxAndRegisterRoutes(),
		Addr:         "127.0.0.1:8000",
		WriteTimeout: 10 * time.Second,
		ReadTimeout:  10 * time.Second,
	}

	fmt.Println("Server runnning at " + "http://" + server.Addr)

	if err := server.ListenAndServe(); err != nil {
		panic(err)
	}
}

func createMuxAndRegisterRoutes() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/", indexHandler)
	router.PathPrefix("/{filePath}").Handler(http.FileServer(appData))
	return router
}

func indexHandler(writer http.ResponseWriter, request *http.Request) {
	var tmpl *template.Template

	appTemplate, err := appData.FindString("index.html")

	if err != nil {
		panic(err)
	}

	tmpl, err = template.New("app").Parse(appTemplate)

	if err != nil {
		panic(err)
	}

	_ = tmpl.Execute(writer, nil)
}
