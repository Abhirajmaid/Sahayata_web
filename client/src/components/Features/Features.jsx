import "./style.css";

const Features = () => {
  return (
    <>
      <section class="section features">
        <div class="container">
          <ul class="features-list">
            <li class="features-item">
              <div class="item-icon">
                <ion-icon name="leaf-outline"></ion-icon>
              </div>

              <div>
                <h3 class="h4 item-title">Enviroment Wing</h3>

                <p class="item-text">
                  Safeguarding our planet with sustainable practices, tree
                  planting campaigns, and environmental awareness initiatives.
                </p>
              </div>
            </li>

            <li class="features-item">
              <div class="item-icon">
                <ion-icon name="book-outline"></ion-icon>
              </div>

              <div>
                <h3 class="h4 item-title">Education Wing</h3>

                <p class="item-text">
                  Empowering futures by making educational resources available
                  to the underprivileged.
                </p>
              </div>
            </li>

            <li class="features-item">
              <div class="item-icon">
                <ion-icon name="shield-checkmark-outline"></ion-icon>
              </div>

              <div>
                <h3 class="h4 item-title">Helth & Welfare Wing</h3>

                <p class="item-text">
                  Ensuring healthier communities through accessible healthcare,
                  preventive care advocacy, and awareness.
                </p>
              </div>
            </li>

            <li class="features-item">
              <div class="item-icon">
                <ion-icon name="woman-outline"></ion-icon>
              </div>

              <div>
                <h3 class="h4 item-title">Womens Welfare Wing</h3>

                <p class="item-text">
                  Empowering women while pushing them towards new opportunities.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Features;
