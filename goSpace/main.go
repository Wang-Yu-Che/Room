package main

import "fmt"

func main() {
  /*var(
    name string
    age int
    b bool
  )
  fmt.Printf("name: %v\n", name)
  fmt.Printf("age: %v\n", age)
  fmt.Printf("b: %v\n", b)
  */
  name, age := getNumber()
  fmt.Printf("name: %v\n", name)
  fmt.Printf("age: %v\n", age)
}
func getNumber() (string, int) {
  return "tom", 10
}
