import React, { useState } from "react";
import "../Components/Card.scss";
import FormService from "../Services/FormService";
import { useNavigate } from "react-router-dom";
import "../Components/Alert.scss";
export default function Card() {
  const [nameSurname, setNameSurname] = useState("");
  const [gender, setGender] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  // const [file, setFile] = useState("");

  const [disaster, setDisaster] = useState("");
  const [familDisaster, setFamilDisaster] = useState("");
  const [medic, setMedic] = useState("");
  const [operation, setOperation] = useState("");
  const [allergie, setAllergie] = useState("");
  const [morningTime, setMorningTime] = useState("");
  const [nightTime, setNightTime] = useState("");
  const [regl, setRegl] = useState(false);

  const [toilet, setToilet] = useState(false);
  const [digestiveSystem, setDigestiveSystem] = useState("");
  const [food, setFood] = useState("");
  const [drink, setDrink] = useState("");
  const [currentDailyMealAmount, setCurrentDailyMealAmount] = useState("1");
  const [currentDailySnackAmount, setCurrentDailySnackAmount] = useState("0");
  const [passedMeal, setPassedMeal] = useState("");
  const [possibleDailyMealAmount, setPossibleDailyMealAmount] = useState("1");
  const [essentialFood, setEssentialFood] = useState("");
  const [unlikedFood, setUnlikedFood] = useState("");
  const [fastEat, setFastEat] = useState(false);
  const [cheatMealAmount, setCheatMealAmount] = useState("0");
  const [cheatMealReason, setCheatMealReason] = useState("");
  const [water, setWater] = useState("");
  const [tea, setTea] = useState("");
  const [coffee, setCoffee] = useState("");
  const [mineralWater, setMineralWater] = useState("");
  const [fizzyDrink, setFizzyDrink] = useState("");
  const [cigaratte, setCigaratte] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [ayran, setAyran] = useState("");
  const [milk, setMilk] = useState("");

  const [whenGainLoss, setWhenGainLoss] = useState("");
  const [highestWeight, setHighestWeight] = useState("");
  const [lowestWeight, setLowestWeight] = useState("");
  const [weightGainLostCause, setWeightGainLostCause] = useState("");
  const [wereCurrentDietBefore, setWereCurrentDietBefore] = useState("");
  const [goalWeight, setGoalWeight] = useState("");

  const [fitness, setFitness] = useState("");
  const [cardio, setCardio] = useState("");
  const [functional, setfunctional] = useState("");

  const [trainerName, setTrainerName] = useState("");
  const [dailyStep, setDailyStep] = useState("");
  const [sportHistory, setSportHistory] = useState("");

  const [specialNote, setSpecialNote] = useState("");

  const history = useNavigate();
  let validate = false;
  const [alertValidation, setAlertValidation] = useState(false);
  const handleSubmit = (e) => {
    const Customer = {
      nameSurname: nameSurname,
      gender: gender,
      job: job,
      email: email,
      phoneNumber: phoneNumber,
      age: age,
      weight: weight,
      height: height,
      disaster: disaster,
      familyDisaster: familDisaster,
      medic: medic,
      operation: operation,
      allergie: allergie,
      morningTime: morningTime,
      nightTime: nightTime,
      regl: regl === "" ? "Yok" : regl,
      toilet: toilet === "" ? "Yok" : toilet,
      digestiveProblem: digestiveSystem,
      badFood: food,
      badDrink: drink,
      currentDailyMealAmount: currentDailyMealAmount,
      currentDailySnackAmount: currentDailySnackAmount,
      passedMeal: passedMeal,
      possibleDailyMealAmount: possibleDailyMealAmount,
      essentialFood: essentialFood,
      unlikedFood: unlikedFood,
      fastEat: fastEat === "" ? "Yok" : fastEat,
      cheatAmount: cheatMealAmount,
      cheatReason: cheatMealReason,
      water: water,
      tea: tea,
      coffee: coffee,
      mineralWater: mineralWater,
      fizzyDrink: fizzyDrink,
      cigaratte: cigaratte,
      alcohol: alcohol,
      ayran: ayran,
      milk: milk,
      whenGainLoss: whenGainLoss,
      highestWeight: highestWeight,
      lowestWeight: lowestWeight,
      weightGainLostCause: weightGainLostCause,
      wereCurrentDietBefore: wereCurrentDietBefore,
      goalWeight: goalWeight,
      fitness: fitness,
      cardio: cardio,
      functional: functional,
      trainerName: trainerName,
      dailyStep: dailyStep,
      sportHistory: sportHistory,
      specialNote: specialNote,
    };

    validate = handleChange(Customer);
    if (validate) {
      let formService = new FormService();
      formService
        .postPreRegister(Customer)
        .then((result) => console.log(result.data), history("/form-file"));
    } else {
      setAlertValidation(true);
    }
  };

  function handleChange(Customer) {
    if (
      Customer.nameSurname === "" ||
      Customer.job === "" ||
      Customer.email === "" ||
      Customer.phoneNumber === "" ||
      Customer.age === "" ||
      Customer.weight === "" ||
      Customer.height === "" ||
      Customer.disaster === "" ||
      Customer.familyDisaster === "" ||
      Customer.medic === "" ||
      Customer.operation === "" ||
      Customer.allergie === "" ||
      Customer.morningTime === "" ||
      Customer.nightTime === "" ||
      Customer.toilet === "" ||
      Customer.passedMeal === "" ||
      Customer.essentialFood === "" ||
      Customer.unlikedFood === "" ||
      Customer.water === "" ||
      Customer.tea === "" ||
      Customer.coffee === "" ||
      Customer.mineralWater === "" ||
      Customer.fizzyDrink === "" ||
      Customer.cigaratte === "" ||
      Customer.alcohol === "" ||
      Customer.ayran === "" ||
      Customer.milk === "" ||
      Customer.whenGainLoss === "" ||
      Customer.highestWeight === "" ||
      Customer.lowestWeight === "" ||
      Customer.weightGainLostCause === "" ||
      Customer.wereCurrentDietBefore === "" ||
      Customer.goalWeight === "" ||
      Customer.fitness === "" ||
      Customer.cardio === "" ||
      Customer.functional === "" ||
      Customer.dailyStep === "" 
    ) {
      return false;
    } else {
      return true;
    }
  }

  function checkValidationYes(id1, id2) {
    var el1 = document.getElementById(id1);
    var el2 = document.getElementById(id2);

    if (el1.checked) {
      document.getElementById(id1 + "-label").innerHTML = "Var Se??ildi";
      document.getElementById("input1-" + id1).classList.remove("col-4");
      document.getElementById("input1-" + id1).classList.add("col-7");
      document.getElementById("input2-" + id1).classList.remove("col-7");
      document.getElementById("input2-" + id1).classList.add("col-4");
      document.getElementById(id2 + "-label").innerHTML = "Yok";
      el2.checked = false;
      if (document.getElementById(id1 + "-input") !== null) {
        document.getElementById(id1 + "-input").style.display = "block";
      }
    }
    if (el1.checked === false && el2.checked === false) {
      document.getElementById("input1-" + id1).classList.remove("col-7");
      document.getElementById("input1-" + id1).classList.add("col-4");
      document.getElementById("input2-" + id1).classList.remove("col-7");
      document.getElementById("input2-" + id1).classList.add("col-4");
      document.getElementById(id1 + "-label").innerHTML = "Var";
      document.getElementById(id2 + "-label").innerHTML = "Yok";

      if (document.getElementById(id1 + "-input") !== null)
        document.getElementById(id1 + "-input").style.display = "none";
    }
  }
  function checkValidationNo(id1, id2) {
    var el1 = document.getElementById(id1);
    var el2 = document.getElementById(id2);

    if (el2.checked) {
      document.getElementById(id2 + "-label").innerHTML = "Yok Se??ildi";
      document.getElementById("input1-" + id1).classList.remove("col-7");
      document.getElementById("input1-" + id1).classList.add("col-4");
      document.getElementById("input2-" + id1).classList.remove("col-4");
      document.getElementById("input2-" + id1).classList.add("col-7");
      document.getElementById(id1 + "-label").innerHTML = "Var";
      el1.checked = false;
      if (document.getElementById(id1 + "-input") !== null)
        document.getElementById(id1 + "-input").style.display = "none";
    }
    if (el1.checked === false && el2.checked === false) {
      document.getElementById("input1-" + id1).classList.remove("col-7");
      document.getElementById("input1-" + id1).classList.add("col-4");
      document.getElementById("input2-" + id1).classList.remove("col-7");
      document.getElementById("input2-" + id1).classList.add("col-4");
      document.getElementById(id1 + "-label").innerHTML = "Var";
      document.getElementById(id2 + "-label").innerHTML = "Yok";
      if (document.getElementById(id1 + "-input") !== null)
        document.getElementById(id1 + "-input").style.display = "none";
    }
  }

  function reglControl() {
    var gender = document.getElementById("gender").value;
    if (gender === "erkek" || gender === "Erkek") {
      document.getElementById("regl-control").style.display = "none";
    } else {
      document.getElementById("regl-control").style.display = "block";
    }
  }

  function controlMealAmount() {
    var mealAmount = document.getElementById("outside-meal-amount").value;
    if (mealAmount === "0") {
      document
        .getElementById("outside-meal-amount-input")
        .classList.add("d-none");
        setCheatMealReason("Yok");
    } else {
      document
        .getElementById("outside-meal-amount-input")
        .classList.remove("d-none");
        setCheatMealReason("");

      document
        .getElementById("outside-meal-amount-input")
        .classList.add("d-block");
    }
  }
  return (
    <form method="post">
      {alertValidation ? (
        <div className="alert-component">
          <div class="alert alert-danger" role="alert">
            L??tfen Formu Eksiksiz Doldurunuz
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              onClick={() => setAlertValidation(false)}
            ></button>
          </div>
        </div>
      ) : (
        <div id="card" className="container">
          <div className="card-personal-first">
            <h3 className="mb-3">Ki??isel Bilgiler</h3>
            <div className="row d-flex justify-content-between">
              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  required
                  id="name-surname"
                  name="Ad??Soyad??"
                  value={nameSurname}
                  onChange={(e) => setNameSurname(e.target.value)}
                />
                <label htmlFor="name-surname">Ad Soyad</label>
              </div>
              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  required
                  id="gender"
                  name="Cinsiyeti"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                    reglControl();
                  }}
                />
                <label htmlFor="gender">Cinsiyet</label>
              </div>
              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  required
                  id="job"
                  name="????i"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                />
                <label htmlFor="job">Meslek</label>
              </div>
              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="email"
                  className="sm-1 md-3 text-input "
                  required
                  id="email"
                  name="EmailAdresi"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">E-Posta</label>
              </div>
              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="tel"
                  className="sm-1 md-3 text-input "
                  required
                  id="tel"
                  name="Telefonu"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <label htmlFor="tel">Cep Telefonu</label>
              </div>
              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="tel"
                  className="sm-1 md-3 text-input "
                  required
                  id="age"
                  name="Ya????"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <label htmlFor="age">Ya??</label>
              </div>
              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="tel"
                  className="sm-1 md-3 text-input "
                  required
                  id="weight"
                  name="Kilosu"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
                <label htmlFor="weight">Kilo</label>
              </div>
              <div className="input-container col-sm-6 col-12 mb-3 mb-sm-4 ">
                <input
                  type="tel"
                  className="sm-1 md-3 text-input "
                  required
                  id="height"
                  name="Boyu"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
                <label htmlFor="height">Boy</label>
              </div>
              {/* <div className=" col-sm-12 col-12 mb-3 mb-sm-1 file-input d-flex justify-content-between align-items-center"> 
              <input
                type="file"
                className="sm-1 md-3"
                id="file"
                name="Tahlil"
                onChange={(e) => {
                  fileValidation(e);
                }}
              />
              <label htmlFor="file" id="file-label">
                Kan Tahlili Var ??se Y??kleyiniz
                <i className="fa-solid fa-upload ms-5"></i>
              </label>
            </div>*/}
            </div>
          </div>

          <div className="card-personal-second">
            <label htmlFor="">Tan??s?? Konulmu?? Hastal??????n??z </label>
            <div className="input-group-container col-sm-6 col-12 mb-4 mb-sm-4 ">
              <div className="input1 col-4" id="input1-disaster-current">
                <input
                  type="checkbox"
                  id="disaster-current"
                  // name="tan??s?? konulmu?? hastal??k var"
                  onChange={() =>
                    checkValidationYes(
                      "disaster-current",
                      "disaster-not-current"
                    )
                  }
                />
                <label htmlFor="disaster-current" id="disaster-current-label">
                  Var
                </label>
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  id="disaster-current-input"
                  name="tan??s?? konulmu?? hastal??k"
                  placeholder="Buraya Yaz??n??z"
                  value={disaster === "Yok" ? "" : disaster}
                  onChange={(e) => setDisaster(e.target.value)}
                />
              </div>

              <div className="input2 col-4" id="input2-disaster-current">
                <input
                  type="checkbox"
                  id="disaster-not-current"
                  // name="tan??s?? konulmu?? hastal??k yok"
                  onChange={() => {
                    checkValidationNo(
                      "disaster-current",
                      "disaster-not-current"
                    );
                    setDisaster("Yok");
                  }}
                />
                <label
                  htmlFor="disaster-not-current"
                  id="disaster-not-current-label"
                >
                  Yok
                </label>
              </div>
            </div>
            <label htmlFor="">Birinci Derece Akraban??zda Kronik Hastal??k</label>
            <div className="input-group-container col-sm-6 col-12 mb-4 mb-sm-4 ">
              <div className="input1 col-4" id="input1-family-disaster-current">
                <input
                  type="checkbox"
                  id="family-disaster-current"
                  // name="ailede hastal??k var"
                  onChange={() =>
                    checkValidationYes(
                      "family-disaster-current",
                      "family-disaster-not-current"
                    )
                  }
                />
                <label
                  htmlFor="family-disaster-current"
                  id="family-disaster-current-label"
                >
                  Var
                </label>
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  id="family-disaster-current-input"
                  name="Ailede bulunan hastal??k"
                  placeholder="Buraya Yaz??n??z"
                  value={familDisaster === "Yok" ? "" : familDisaster}
                  onChange={(e) => setFamilDisaster(e.target.value)}
                />
              </div>

              <div className="input2 col-4" id="input2-family-disaster-current">
                <input
                  type="checkbox"
                  id="family-disaster-not-current"
                  // name="ailede hastal??k yok"
                  onChange={() => {
                    checkValidationNo(
                      "family-disaster-current",
                      "family-disaster-not-current"
                    );
                    setFamilDisaster("Yok");
                  }}
                />
                <label
                  htmlFor="family-disaster-not-current"
                  id="family-disaster-not-current-label"
                >
                  Yok
                </label>
              </div>
            </div>

            <label htmlFor="">D??zenli Kulland??????n??z ??la??lar</label>
            <div className="input-group-container col-sm-6 col-12 mb-4 mb-sm-4 ">
              <div className="input1 col-4" id="input1-medic-current">
                <input
                  type="checkbox"
                  id="medic-current"
                  // name="ila?? var"
                  onChange={() =>
                    checkValidationYes("medic-current", "medic-not-current")
                  }
                />
                <label htmlFor="medic-current" id="medic-current-label">
                  Var
                </label>
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  id="medic-current-input"
                  name="Kullan??lan ila??lar"
                  placeholder="Buraya Yaz??n??z"
                  value={medic === "Yok" ? "" : medic}
                  onChange={(e) => setMedic(e.target.value)}
                />
              </div>

              <div className="input2 col-4" id="input2-medic-current">
                <input
                  type="checkbox"
                  id="medic-not-current"
                  // name="ila?? yok"
                  onChange={() => {
                    checkValidationNo("medic-current", "medic-not-current");
                    setMedic("Yok");
                  }}
                />
                <label htmlFor="medic-not-current" id="medic-not-current-label">
                  Yok
                </label>
              </div>
            </div>

            <label htmlFor="">Ge??irilen Ameliyat</label>
            <div className="input-group-container col-sm-6 col-12 mb-4 mb-sm-4 ">
              <div className="input1 col-4" id="input1-operation-current">
                <input
                  type="checkbox"
                  id="operation-current"
                  // name="ameliyat var"
                  onChange={() =>
                    checkValidationYes(
                      "operation-current",
                      "operation-not-current"
                    )
                  }
                />
                <label htmlFor="operation-current" id="operation-current-label">
                  Var
                </label>
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  id="operation-current-input"
                  name="Ge??irilen ameliyatlar"
                  placeholder="Buraya Yaz??n??z"
                  value={operation === "Yok" ? "" : operation}
                  onChange={(e) => setOperation(e.target.value)}
                />
              </div>

              <div className="input2 col-4" id="input2-operation-current">
                <input
                  type="checkbox"
                  id="operation-not-current"
                  // name="ameliyat yok"
                  onChange={() => {
                    checkValidationNo(
                      "operation-current",
                      "operation-not-current"
                    );
                    setOperation("Yok");
                  }}
                />
                <label
                  htmlFor="operation-not-current"
                  id="operation-not-current-label"
                >
                  Yok
                </label>
              </div>
            </div>

            <label htmlFor="">Besin Alerjisi</label>
            <div className="input-group-container col-sm-6 col-12 mb-4 mb-sm-4 ">
              <div className="input1 col-4" id="input1-allergie-current">
                <input
                  type="checkbox"
                  id="allergie-current"
                  // name="alerji var"
                  onChange={() =>
                    checkValidationYes(
                      "allergie-current",
                      "allergie-not-current"
                    )
                  }
                />
                <label htmlFor="allergie-current" id="allergie-current-label">
                  Var
                </label>
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  id="allergie-current-input"
                  name="Besin Alerjisi Bulunan G??dalar"
                  placeholder="Buraya Yaz??n??z"
                  value={allergie === "Yok" ? "" : allergie}
                  onChange={(e) => setAllergie(e.target.value)}
                />
              </div>

              <div className="input2 col-4" id="input2-allergie-current">
                <input
                  type="checkbox"
                  id="allergie-not-current"
                  // name="alerji yok"
                  onChange={() => {
                    checkValidationNo(
                      "allergie-current",
                      "allergie-not-current"
                    );
                    setAllergie("Yok");
                  }}
                />
                <label
                  htmlFor="allergie-not-current"
                  id="allergie-not-current-label"
                >
                  Yok
                </label>
              </div>
            </div>

            <label htmlFor="">Belirli Bir Uyan???? Saati</label>
            <div className="input-group-container col-sm-6 col-12 mb-4 mb-sm-4 ">
              <div className="input1 col-4" id="input1-morning-current">
                <input
                  type="checkbox"
                  id="morning-current"
                  // name="sabah kalk???? saati var"
                  onChange={() =>
                    checkValidationYes("morning-current", "morning-not-current")
                  }
                />
                <label htmlFor="morning-current" id="morning-current-label">
                  Var
                </label>
                <input
                  type="time"
                  className="sm-1 md-3 text-input "
                  id="morning-current-input"
                  name="Kalk???? Saati"
                  placeholder="Buraya Yaz??n??z"
                  value={morningTime === "00:00:00" ? "" : morningTime}
                  onChange={(e) => setMorningTime(e.target.value)}
                />
              </div>

              <div className="input2 col-4" id="input2-morning-current">
                <input
                  type="checkbox"
                  id="morning-not-current"
                  // name="sabah kalk???? saati yok"
                  onChange={() => {
                    checkValidationNo("morning-current", "morning-not-current");
                    setMorningTime("00:00:00");
                  }}
                />
                <label
                  htmlFor="morning-not-current"
                  id="morning-not-current-label"
                >
                  Yok
                </label>
              </div>
            </div>

            <label htmlFor="">Belirli Bir Yat???? Saati</label>
            <div className="input-group-container col-sm-6 col-12 mb-4 mb-sm-4 ">
              <div className="input1 col-4" id="input1-night-current">
                <input
                  type="checkbox"
                  id="night-current"
                  // name="ak??am yat???? saati var"
                  onChange={() =>
                    checkValidationYes("night-current", "night-not-current")
                  }
                />
                <label htmlFor="night-current" id="night-current-label">
                  Var
                </label>
                <input
                  type="time"
                  className="sm-1 md-3 text-input "
                  id="night-current-input"
                  name="Yat???? Saati"
                  placeholder="Buraya Yaz??n??z"
                  value={nightTime === "00:00:00" ? "" : nightTime}
                  onChange={(e) => setNightTime(e.target.value)}
                />
              </div>

              <div className="input2 col-4" id="input2-night-current">
                <input
                  type="checkbox"
                  id="night-not-current"
                  // name="ak??am yat???? saati yok"
                  onChange={() => {
                    checkValidationNo("night-current", "night-not-current");
                    setNightTime("00:00:00");
                  }}
                />
                <label htmlFor="night-not-current" id="night-not-current-label">
                  Yok
                </label>
              </div>
            </div>

            <div id="regl-control">
              <label htmlFor="">Belirli Bir Regl D??zeni</label>
              <div className="input-group-container col-sm-6 col-12 mb-3 mb-sm-3 ">
                <div className="input1 col-4" id="input1-regl-current">
                  <input
                    type="checkbox"
                    id="regl-current"
                    name="regl d??zeni var"
                    onChange={() => {
                      setRegl("Var");
                      checkValidationYes("regl-current", "regl-not-current");
                    }}
                  />
                  <label htmlFor="regl-current" id="regl-current-label">
                    Var
                  </label>
                </div>

                <div className="input2 col-4" id="input2-regl-current">
                  <input
                    type="checkbox"
                    id="regl-not-current"
                    name="regl d??zeni yok"
                    onChange={() => {
                      setRegl("Yok");
                      checkValidationNo("regl-current", "regl-not-current");
                    }}
                  />
                  <label htmlFor="regl-not-current" id="regl-not-current-label">
                    Yok
                  </label>
                </div>
              </div>
            </div>
          </div> 

          <div className="card-personal-second">
            <h3 className="mb-3">Sindirim Sistemi</h3>

            <label htmlFor="">D??zenli Tuvalet Al????kanl??????n??z</label>
            <div className="input-group-container col-sm-6 col-12 mb-4 mb-sm-4 ">
              <div className="input1 col-4" id="input1-toilet-current">
                <input
                  type="checkbox"
                  id="toilet-current"
                  name="tuvalet al????kanl?????? var"
                  onChange={() => {
                    setToilet(true);
                    checkValidationYes("toilet-current", "toilet-not-current");
                  }}
                />
                <label htmlFor="toilet-current" id="toilet-current-label">
                  Var
                </label>
              </div>

              <div className="input2 col-4" id="input2-toilet-current">
                <input
                  type="checkbox"
                  id="toilet-not-current"
                  name="tuvalet al????kanl?????? yok"
                  onChange={() => {
                    setToilet(false);
                    checkValidationNo("toilet-current", "toilet-not-current");
                  }}
                />
                <label
                  htmlFor="toilet-not-current"
                  id="toilet-not-current-label"
                >
                  Yok
                </label>
              </div>
            </div>
            <label htmlFor="">Sindirim Sistemi Problemi</label>
            <div className="input-group-container col-sm-6 col-12 mb-4 mb-sm-4 ">
              <div
                className="input1 col-4"
                id="input1-digestive-problem-current"
              >
                <input
                  type="checkbox"
                  id="digestive-problem-current"
                  // name="Sindirim sistemi problemi var"
                  onChange={() =>
                    checkValidationYes(
                      "digestive-problem-current",
                      "digestive-problem-not-current"
                    )
                  }
                />
                <label
                  htmlFor="digestive-problem-current"
                  id="digestive-problem-current-label"
                >
                  Var
                </label>
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  id="digestive-problem-current-input"
                  name="Sindirim sistemi problemi"
                  placeholder="Buraya Yaz??n??z"
                  value={digestiveSystem === "Yok" ? "" : digestiveSystem}
                  onChange={(e) => setDigestiveSystem(e.target.value)}
                />
              </div>

              <div
                className="input2 col-4"
                id="input2-digestive-problem-current"
              >
                <input
                  type="checkbox"
                  id="digestive-problem-not-current"
                  // name="Sindirim sistemi problemi yok"
                  onChange={() => {
                    checkValidationNo(
                      "digestive-problem-current",
                      "digestive-problem-not-current"
                    );
                    setDigestiveSystem("Yok");
                  }}
                />
                <label
                  htmlFor="digestive-problem-not-current"
                  id="digestive-problem-not-current-label"
                >
                  Yok
                </label>
              </div>
            </div>

            <label htmlFor="">Mideye Rahats??zl??k Veren Yiyecek</label>
            <div className="input-group-container col-sm-6 col-12 mb-4 mb-sm-4 ">
              <div className="input1 col-4" id="input1-food-current">
                <input
                  type="checkbox"
                  id="food-current"
                  // name="Mideye rahats??zl??k veren yiyecek var"
                  onChange={() =>
                    checkValidationYes("food-current", "food-not-current")
                  }
                />
                <label htmlFor="food-current" id="food-current-label">
                  Var
                </label>
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  id="food-current-input"
                  name="Mideye rahats??zl??k veren yiyecek"
                  placeholder="Buraya Yaz??n??z"
                  value={food === "Yok" ? "" : food}
                  onChange={(e) => setFood(e.target.value)}
                />
              </div>

              <div className="input2 col-4" id="input2-food-current">
                <input
                  type="checkbox"
                  id="food-not-current"
                  // name="Mideye rahats??zl??k veren yiyecek yok"
                  onChange={() => {
                    checkValidationNo("food-current", "food-not-current");
                    setFood("Yok");
                  }}
                />
                <label htmlFor="food-not-current" id="food-not-current-label">
                  Yok
                </label>
              </div>
            </div>

            <label htmlFor="">Mideye Rahats??zl??k Veren ????ecek</label>
            <div className="input-group-container col-sm-6 col-12 mb-3 mb-sm-3 ">
              <div className="input1 col-4" id="input1-drink-current">
                <input
                  type="checkbox"
                  id="drink-current"
                  // name="Mideye rahats??zl??k veren i??ecek var"
                  onChange={() =>
                    checkValidationYes("drink-current", "drink-not-current")
                  }
                />
                <label htmlFor="drink-current" id="drink-current-label">
                  Var
                </label>
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  id="drink-current-input"
                  name="Mideye rahats??zl??k veren i??ecek"
                  placeholder="Buraya Yaz??n??z"
                  value={drink === "Yok" ? "" : drink}
                  onChange={(e) => setDrink(e.target.value)}
                />
              </div>

              <div className="input2 col-4" id="input2-drink-current">
                <input
                  type="checkbox"
                  id="drink-not-current"
                  // name="Mideye rahats??zl??k veren i??ecek yok"
                  onChange={() => {
                    checkValidationNo("drink-current", "drink-not-current");
                    setDrink("Yok");
                  }}
                />
                <label htmlFor="drink-not-current" id="drink-not-current-label">
                  Yok
                </label>
              </div>
            </div>
          </div>

          <div className="card-personal-second">
            <h3 className="mb-3">Al????kanl??klar??n??z</h3>
            <div className="input-container col-sm-6 col-12 mb-4 mb-sm-2">
              <label htmlFor="">G??nde Ka?? ??????n Yap??yorsunuz</label>
              <select
                name="Mevcut ??????n say??s??"
                id="meal-amount"
                value={currentDailyMealAmount}
                onChange={(e) => setCurrentDailyMealAmount(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>

            <label htmlFor="">Atlanan ??????n ( Sabah , ????le , Ak??am )</label>
            <div className="input-group-container col-sm-6 col-12 mb-4 mb-sm-4 ">
              <div className="input1 col-4" id="input1-passed-meal-current">
                <input
                  type="checkbox"
                  id="passed-meal-current"
                  // name="Atlanan ??????n Var"
                  onChange={() =>
                    checkValidationYes(
                      "passed-meal-current",
                      "passed-meal-not-current"
                    )
                  }
                />
                <label
                  htmlFor="passed-meal-current"
                  id="passed-meal-current-label"
                >
                  Var
                </label>
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  id="passed-meal-current-input"
                  name="Atlanan ??????nler"
                  placeholder="Buraya Yaz??n??z"
                  value={passedMeal === "Yok" ? "" : passedMeal}
                  onChange={(e) => setPassedMeal(e.target.value)}
                />
              </div>

              <div className="input2 col-4" id="input2-passed-meal-current">
                <input
                  type="checkbox"
                  id="passed-meal-not-current"
                  // name="Atlanan ??????n Yok"
                  onChange={() =>
                   {
                    checkValidationNo(
                      "passed-meal-current",
                      "passed-meal-not-current"
                    );
                    setPassedMeal("Yok");
                   }
                  }
                />
                <label
                  htmlFor="passed-meal-not-current"
                  id="passed-meal-not-current-label"
                >
                  Yok
                </label>
              </div>
            </div>

            <div className="input-container col-sm-6 col-12 mb-4 mb-sm-2">
              <label htmlFor="">G??nde Ka?? Ara ??????n Yap??yorsunuz</label>
              <select
                name="Yap??labilir ??????n say??s??"
                id="will-meal-amount"
                value={currentDailySnackAmount}
                onChange={(e) => setCurrentDailySnackAmount(e.target.value)}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>

            <div className="input-container col-sm-6 col-12 mb-4 mb-sm-2">
              <label htmlFor="">G??nde Ka?? ??????n Yapabilirsiniz </label>
              <select
                name="Yap??labilir ??????n say??s??"
                id="will-meal-amount"
                value={possibleDailyMealAmount}
                onChange={(e) => setPossibleDailyMealAmount(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>

            <label htmlFor="">Vazge??ilmez Besin</label>
            <div className="input-group-container col-sm-6 col-12 mb-4 mb-sm-4 ">
              <div className="input1 col-4" id="input1-essential-food-current">
                <input
                  type="checkbox"
                  id="essential-food-current"
                  // name="Vazge??ilmez Besin Var"
                  onChange={() =>
                    checkValidationYes(
                      "essential-food-current",
                      "essential-food-not-current"
                    )
                  }
                />
                <label
                  htmlFor="essential-food-current"
                  id="essential-food-current-label"
                >
                  Var
                </label>
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  id="essential-food-current-input"
                  name="Vazge??ilmez Besinler"
                  placeholder="Buraya Yaz??n??z"
                  value={essentialFood === "Yok" ? "" : essentialFood}
                  onChange={(e) => setEssentialFood(e.target.value)}
                />
              </div>

              <div className="input2 col-4" id="input2-essential-food-current">
                <input
                  type="checkbox"
                  id="essential-food-not-current"
                  // name="Vazge??ilmez Besin Yok"
                  onChange={() =>
                    {
                      checkValidationNo(
                        "essential-food-current",
                        "essential-food-not-current"
                      );
                      setEssentialFood("Yok");
                    }
                  }
                />
                <label
                  htmlFor="essential-food-not-current"
                  id="essential-food-not-current-label"
                >
                  Yok
                </label>
              </div>
            </div>

            <label htmlFor="">Sevilmeyen Besin</label>
            <div className="input-group-container col-sm-6 col-12 mb-4 mb-sm-4 ">
              <div className="input1 col-4" id="input1-disliked-food-current">
                <input
                  type="checkbox"
                  id="disliked-food-current"
                  // name="Sevilmeyen Besin Var"
                  onChange={() =>
                    checkValidationYes(
                      "disliked-food-current",
                      "disliked-food-not-current"
                    )
                  }
                />
                <label
                  htmlFor="disliked-food-current"
                  id="disliked-food-current-label"
                >
                  Var
                </label>
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  id="disliked-food-current-input"
                  name="Sevilmeyen Besinler"
                  placeholder="Buraya Yaz??n??z"
                  value={unlikedFood === "Yok" ? "" : unlikedFood}
                  onChange={(e) => setUnlikedFood(e.target.value)}
                />
              </div>

              <div className="input2 col-4" id="input2-disliked-food-current">
                <input
                  type="checkbox"
                  id="disliked-food-not-current"
                  // name="Sevilmeyen Besin Yok"
                  onChange={() =>
                    {
                      checkValidationNo(
                        "disliked-food-current",
                        "disliked-food-not-current"
                      );
                      setUnlikedFood("Yok");
                    }
                  }
                />
                <label
                  htmlFor="disliked-food-not-current"
                  id="disliked-food-not-current-label"
                >
                  Yok
                </label>
              </div>
            </div>

            <label htmlFor="">H??zl?? Yemek Yeme Al????kanl??????</label>
            <div className="input-group-container col-sm-6 col-12 mb-4 mb-sm-4 ">
              <div className="input1 col-4" id="input1-fast-eat-current">
                <input
                  type="checkbox"
                  id="fast-eat-current"
                  name="H??zl?? Yemek Yeme Al????kanl?????? Var"
                  onChange={() => {
                    setFastEat("Var");
                    checkValidationYes(
                      "fast-eat-current",
                      "fast-eat-not-current"
                    );
                  }}
                />
                <label htmlFor="fast-eat-current" id="fast-eat-current-label">
                  Var
                </label>
              </div>

              <div className="input2 col-4" id="input2-fast-eat-current">
                <input
                  type="checkbox"
                  id="fast-eat-not-current"
                  name="H??zl?? Yemek Yeme Al????kanl?????? Yok"
                  onChange={() => {
                    setFastEat("Yok");
                    checkValidationNo(
                      "fast-eat-current",
                      "fast-eat-not-current"
                    );
                  }}
                />
                <label
                  htmlFor="fast-eat-not-current"
                  id="fast-eat-not-current-label"
                >
                  Yok
                </label>
              </div>
            </div>

            <div className="input-container col-sm-6 col-12 mb-2 mb-sm-2">
              <label htmlFor="">Haftada Ka?? Kez D????ar??da Yersiniz</label>
              <select
                name="D????ar??da Yenen Yemek Miktar??"
                id="outside-meal-amount"
                onChange={(e) => {
                  setCheatMealAmount(e.target.value);
                  controlMealAmount();
                }}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
            <input
              type="text"
              className="sm-1 md-3 text-input w-100 mb-sm-3 mb-3 d-none"
              id="outside-meal-amount-input"
              name="D????ar?? Yemek Yeme Sebebi"
              placeholder="D????ar?? Yeme Sebebiniz Nedir ?"
              value={cheatMealReason}
              onChange={(e) => setCheatMealReason(e.target.value)}
            />
          </div>

          <div className="card-personal-first">
            <h3 className="mb-3">G??nl??k T??ketim</h3>
            <div className="row d-flex justify-content-between">
              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="number"
                  className="sm-1 md-3 text-input "
                  required
                  id="water"
                  name="Su Miktar??"
                  value={water}
                  onChange={(e) => setWater(e.target.value)}
                />
                <label htmlFor="water">Su ( Litre )</label>
              </div>
              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="tel"
                  className="sm-1 md-3 text-input "
                  required
                  id="tea"
                  name="??ay Miktar??"
                  value={tea}
                  onChange={(e) => setTea(e.target.value)}
                />
                <label htmlFor="tea">??ay ( Bardak )</label>
              </div>
              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="tel"
                  className="sm-1 md-3 text-input "
                  required
                  id="coffee"
                  name="Kahve Miktar??"
                  value={coffee}
                  onChange={(e) => setCoffee(e.target.value)}
                />
                <label htmlFor="coffee">Kahve ( Kupa )</label>
              </div>

              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="tel"
                  className="sm-1 md-3 text-input "
                  required
                  id="mineral"
                  name="Maden Suyu Miktar??"
                  value={mineralWater}
                  onChange={(e) => setMineralWater(e.target.value)}
                />
                <label htmlFor="mineral">Maden Suyu ( ??i??e )</label>
              </div>

              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="tel"
                  className="sm-1 md-3 text-input "
                  required
                  id="asit"
                  name="Asitli ????ecek Miktar??"
                  value={fizzyDrink}
                  onChange={(e) => setFizzyDrink(e.target.value)}
                />
                <label htmlFor="asit">Asitli ????ecek ( Bardak )</label>
              </div>

              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="tel"
                  className="sm-1 md-3 text-input "
                  required
                  id="cigaratte"
                  name="Sigara Miktar??"
                  value={cigaratte}
                  onChange={(e) => setCigaratte(e.target.value)}
                />
                <label htmlFor="cigaratte">Sigara ( Adet )</label>
              </div>

              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="tel"
                  className="sm-1 md-3 text-input "
                  required
                  id="alcohol"
                  name="Alkol Miktar??"
                  value={alcohol}
                  onChange={(e) => setAlcohol(e.target.value)}
                />
                <label htmlFor="alcohol">Alkol ( Litre )</label>
              </div>

              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="tel"
                  className="sm-1 md-3 text-input "
                  required
                  id="ayran"
                  name="Ayran Miktar??"
                  value={ayran}
                  onChange={(e) => setAyran(e.target.value)}
                />
                <label htmlFor="ayran">Ayran ( Bardak )</label>
              </div>

              <div className="input-container col-sm-12 col-12 mb-3 mb-sm-3">
                <input
                  type="tel"
                  className="sm-1 md-3 text-input "
                  required
                  id="milk"
                  name="S??t Miktar??"
                  value={milk}
                  onChange={(e) => setMilk(e.target.value)}
                />
                <label htmlFor="milk">S??t ( Bardak )</label>
              </div>
            </div>
          </div>

          <div className="card-personal-first">
            <h3 className="mb-3">Kilo Alma-Verme ??yk??n??z</h3>
            <div className="row d-flex justify-content-between">
              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <textarea
                  className="sm-1 md-3 text-input"
                  required
                  name="Ne Zaman Kilo Almaya/Vermeye Ba??lad??n??z ?"
                  id="weight-gain-lost"
                  placeholder="Ne Zaman Kilo Almaya/Vermeye Ba??lad??n??z ?"
                  cols="30"
                  rows="5"
                  value={whenGainLoss}
                  onChange={(e) => setWhenGainLoss(e.target.value)}
                ></textarea>
              </div>

              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="tel"
                  className="sm-1 md-3 text-input "
                  required
                  id="highest-weight"
                  name="En Y??ksek Kilo"
                  value={highestWeight}
                  onChange={(e) => setHighestWeight(e.target.value)}
                />
                <label htmlFor="highest-weight">G??r??len En Y??ksek Kilo</label>
              </div>

              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="tel"
                  className="sm-1 md-3 text-input "
                  required
                  id="lowest-weight"
                  name="En D??????k Kilo"
                  value={lowestWeight}
                  onChange={(e) => setLowestWeight(e.target.value)}
                />
                <label htmlFor="lowest-weight">G??r??len En D??????k Kilo</label>
              </div>

              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <textarea
                  className="sm-1 md-3 text-input"
                  required
                  name="Kilo Alma / Verme Sebebiniz Sizce Nedir ?"
                  id="weight-gain-lost-cause"
                  placeholder="Kilo Alma / Verme Sebebiniz Sizce Nedir ?"
                  cols="30"
                  rows="5"
                  value={weightGainLostCause}
                  onChange={(e) => setWeightGainLostCause(e.target.value)}
                ></textarea>
              </div>

              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <textarea
                  className="sm-1 md-3 text-input"
                  required
                  name="Daha ??nce Uygulad??????n??z Diyet Var M?? ?"
                  id="weight-gain-lost-cause"
                  placeholder="Daha ??nce Uygulad??????n??z Diyet Var M?? ? Var ise ????eri??ini-S??resini-Sonu??lar??n?? Belirtiniz."
                  cols="30"
                  rows="5"
                  value={wereCurrentDietBefore}
                  onChange={(e) => setWereCurrentDietBefore(e.target.value)}
                ></textarea>
              </div>

              <div className="input-container col-sm-6 col-12 mb-3 mb-sm-3 ">
                <input
                  type="tel"
                  className="sm-1 md-3 text-input "
                  required
                  id="goal-weight"
                  name="Hedef Kilo"
                  value={goalWeight}
                  onChange={(e) => setGoalWeight(e.target.value)}
                />
                <label htmlFor="goal-weight">Hedef Kilo</label>
              </div>
            </div>
          </div>

          <div className="card-personal-second">
            <h3 className="mb-3">Antrenman Bilgisi</h3>
            <label htmlFor="">A????rl??k Antrenman??</label>
            <div className="input-group-container col-sm-6 col-12 mb-4 mb-sm-4 ">
              <div className="input1 col-4" id="input1-fitness-current">
                <input
                  type="checkbox"
                  id="fitness-current"
                  // name="A????rl??k Antrenman?? Var"
                  onChange={() =>
                    checkValidationYes("fitness-current", "fitness-not-current")
                  }
                />
                <label htmlFor="fitness-current" id="fitness-current-label">
                  Var
                </label>
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  id="fitness-current-input"
                  name="A????rl??k Antreanman?? Ka?? G??n Ka?? Dk"
                  placeholder="Ka?? G??n Ka?? Dk"
                  value={fitness === "Yok" ? "" : fitness}
                  onChange={(e) => setFitness(e.target.value)}
                />
              </div>

              <div className="input2 col-4" id="input2-fitness-current">
                <input
                  type="checkbox"
                  id="fitness-not-current"
                  // name="tan??s?? konulmu?? hastal??k yok"
                  onChange={() =>{
                    checkValidationNo("fitness-current", "fitness-not-current");
                    setFitness("Yok");

                  }
                  }
                />
                <label
                  htmlFor="fitness-not-current"
                  id="fitness-not-current-label"
                >
                  Yok
                </label>
              </div>
            </div>
            <label htmlFor="">Kardio</label>
            <div className="input-group-container col-sm-6 col-12 mb-4 mb-sm-4 ">
              <div className="input1 col-4" id="input1-cardio-current">
                <input
                  type="checkbox"
                  id="cardio-current"
                  // name="Kardio Var"
                  onChange={() =>
                    checkValidationYes("cardio-current", "cardio-not-current")
                  }
                />
                <label htmlFor="cardio-current" id="cardio-current-label">
                  Var
                </label>
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  id="cardio-current-input"
                  name="Kardio Ka?? G??n Ka?? Dk"
                  placeholder="Ka?? G??n Ka?? Dk"
                  value={cardio === "Yok" ? "" : cardio}
                  onChange={(e) => setCardio(e.target.value)}
                />
              </div>

              <div className="input2 col-4" id="input2-cardio-current">
                <input
                  type="checkbox"
                  id="cardio-not-current"
                  // name="Kardio yok"
                  onChange={() =>{
                    checkValidationNo("cardio-current", "cardio-not-current")
;
                    setCardio("Yok");
                  }
                  }
                />
                <label
                  htmlFor="cardio-not-current"
                  id="cardio-not-current-label"
                >
                  Yok
                </label>
              </div>
            </div>

            <label htmlFor="">Fonksiyonel Antrenman</label>
            <div className="input-group-container col-sm-6 col-12 mb-4 mb-sm-4 ">
              <div className="input1 col-4" id="input1-functional-current">
                <input
                  type="checkbox"
                  id="functional-current"
                  // name="Fonksiyonel Antrenman Var"
                  onChange={() =>
                    checkValidationYes(
                      "functional-current",
                      "functional-not-current"
                    )
                  }
                />
                <label
                  htmlFor="functional-current"
                  id="functional-current-label"
                >
                  Var
                </label>
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  id="functional-current-input"
                  name="Fonksiyonel Antrenman Ka?? G??n Ka?? Dk"
                  placeholder="Ka?? G??n Ka?? Dk"
                  value={functional === "Yok" ? "" : functional}
                  onChange={(e) => setfunctional(e.target.value)}
                />
              </div>

              <div className="input2 col-4" id="input2-functional-current">
                <input
                  type="checkbox"
                  id="functional-not-current"
                  // name="Fonksiyonel Antrenman yok"
                  onChange={() =>
                    {
                      checkValidationNo(
                        "functional-current",
                        "functional-not-current"
                      );
                      setfunctional("Yok");
                    }
                  }
                />
                <label
                  htmlFor="functional-not-current"
                  id="functional-not-current-label"
                >
                  Yok
                </label>
              </div>
            </div>
          </div>

          <div className="card-personal-first">
            <div className="row d-flex justify-content-between">
              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="text"
                  className="sm-1 md-3 text-input "
                  id="personal-trainer"
                  name="??al??????lan Hoca"
                  placeholder="??al??????lan Hoca ( Yok ise bo?? b??rak??n??z )"
                  value={trainerName}
                  onChange={(e) => setTrainerName(e.target.value)}
                />
              </div>

              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <input
                  type="tel"
                  className="sm-1 md-3 text-input "
                  id="daily-step"
                  name="G??nl??k Ad??m Say??s??"
                  placeholder="G??nl??k Ad??m Say??s??"
                  value={dailyStep}
                  onChange={(e) => setDailyStep(e.target.value)}
                />
              </div>

              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <textarea
                  className="sm-1 md-3 text-input"
                  name="Spor Ge??mi??iniz"
                  id="sport-history"
                  placeholder="Spor Ge??mi??iniz ( Yok ise bo?? b??rak??n??z )"
                  cols="30"
                  rows="5"
                  value={sportHistory}
                  onChange={(e) => setSportHistory(e.target.value)}
                ></textarea>
              </div>

              <div className="input-container col-sm-6 col-12 mb-4 mb-sm-4 ">
                <textarea
                  className="sm-1 md-3 text-input"
                  name="??zel not"
                  id="special-note"
                  placeholder="Bunlar??n D??????nda Bilmemi ??stedi??iniz Bir ??ey Var ??se Not Ediniz.Yok ise bo?? b??rak??n??z"
                  cols="30"
                  rows="5"
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                ></textarea>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-success w-100"
              onClick={handleSubmit}
            >
              {!alertValidation ? "??lerle" : "T??m Alanlar?? Cevaplay??n??z"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
