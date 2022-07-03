function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}
printing(); // 1 4 3 2 . Esto pq el 3 y 2 van al callback queue mientras que el 1 y 4 no. Entonces primero se ejecutan el 1 y el 4 y despues quedan los del callback queue. Primero se ejcuta el 3 porque tiene menos tiempo de espera y ultimo el 2.
