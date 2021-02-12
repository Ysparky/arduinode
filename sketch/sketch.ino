String incomingString = "";

void setup() {
  Serial.begin(9600);
  Serial.println("ready");
}

void loop() {
  if (Serial.available() > 0 ) {
    incomingString = Serial.readString();
    Serial.println("received: " + incomingString);
    delay(2000);
  }
}