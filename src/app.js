btnInicio = () => {
  console.log("hola");
  sectionPresentacion.style.display = 'block';
  sectionProyectos.style.diplay = 'block';
  sectionSobreMi.style.display = 'none';
  sectionHerramientas.style.diplay = 'block';
  sectionContacto.style.display = 'block';

}

btnSobreMi = () => {
  sectionPresentacion.style.display = 'none';
  sectionProyectos.style.diplay = 'none';
  sectionSobreMi.style.display = 'block';
  sectionHerramientas.style.diplay = 'none';
  sectionContacto.style.display = 'block';
}