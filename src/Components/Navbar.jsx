import { useEffect, useState } from "react";
function Navbar() {
  const [inputValue, setInputValue] = useState("");
  let [apiData, setApiData] = useState("...loading");

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${inputValue}`
        );
        // setApiData(data.data.recipes);
        const data = await response.json();
        // if (data.data.recipes.length === 0)
        // return console.log("data nh milraha hen abhi ");
        console.log(data);

        // setApiData(data.data.recipes);
        // console.log(data.data.recipes);
        // // console.log(apiData);
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    };

    if (inputValue !== "") {
      fetchAPI();
    }
  }, [inputValue]);
  // console.log(apiData);
  // console.log(apiData);
  return (
    <div className="container hidden lg:block">
      {" "}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">MR Food</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full md:w-full "
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALAAdQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAIEBQYHAQj/xAA5EAACAQMDAgMECQMDBQAAAAABAgMABBEFITEGEhNBUSJhgbEHIzJScZGhwdEUQuEzNKIVJGJzkv/EABgBAQADAQAAAAAAAAAAAAAAAAABAgME/8QAHxEBAQACAgIDAQAAAAAAAAAAAAECEQMhElExQWET/9oADAMBAAIRAxEAPwDQolHVKSrRlWrKkq07tp6inhaAYWl20ULS7aAJWhstSStMK0EVkoTLUwrQWWghOlRpI6sXSo8iVIrZY6hyxZzVtIlRZUohUvFvXlTXj3pUGsQUVVrxRRFWoS9C08LSUU8CgbivcU4+yCTtisb1T1obHMGjok0g2ecjuRN8Yx5n9KW6TJtrJZYogPFkRO7YZbGaZ4kRGVkQj3MDXObQXM0iX+rzuWmx23Ib2V9BztVnb6bCbhpQ7W9ynJRspIPImsry6+mn8/1syKEy1idQ6hvtBkUGQzWzZ7DIe8Z9M8/DNWegdaabq+IZXEFz908N+B/ar45TJS42L5loDrUtsGgsKuqhutR5Eqc61HdaCAyb0qkMm9e0NNAooi00U9ahJy0/ypooOo3As7Ce5biNC1BhPpE6mMUg0q1dh3f7hl9Pu/zVTbS2l1ZmzRBF9X2nuGxHv/n8KxkuozyX8l3NIztIxZgd858t6ubEyXs0bWtlKjrurRylcfDBFY5X7rXGLhZL7T7d7a/sXntSMCWE5/PPFZy/1FraYHTr2btAwFlGCo+7kcit7puiazMoVXaJW5DHOBQ7n6OPELSyylpCQdwKz8o08K54uvXRSWOYiWKX/URsEH0I9DVe7RMMorKc8937V0i/+juKFHMTb+WayXUXTc2koJO3K7d1XxzxtVy48tNt9HV7dS24huJ5HRlyobfHxrasK5H0hrQ0y6izlkLBGVjnAPmPSuu7FAfUVtKwoDigOtSmFAcVZCMw3pU9hvSoLpaIKEKIpokQVSdb3Itelr+RgTlOxceRJAzV2tVHWMQm6W1RSvd/27kD3jeoo4/0fov/AFzWgjD6qPBPvru+j9P2trbxxpCq9o9K5T9GV1Z6e9zcXk6Rys4EcZ+0w9QOcVu9S6yvIYi9jao6DlpO5B8q58pbXThZMW5gsI0TGBTZrJCCMVgdI6/luphDdRpDKeAkgYGp+tdYS2UWEXvmI2XPJqv4nS7u7NSctxWF68hjFjKr49obVXy/SDrPj9ktjb9mdsToT+XdmoXUHUMesW/hOAkoHGear43a3lNOb28zrcrvuGHzr6Gh3t48/cHyr58sITcarawLy06of/oV9Bw4ESqvAGK64478msKC9SGoDVZADDelTn5pUFqvFPWhKaIDRIimoutrJJpN2sIBk8Fu0Hg7VJU05gHQqRkEYqKmfLmfSGif1FxDI8v1kkUlp3NxlSrIB8A/44q0vugDJIRcpfTNnZ42X8t+BVn07ZQafNc2Z7ZYhN3dsgyBwcfAnatPPcwpD3N3Kv8A7pAB/wAq57e9uqY9aYKLoC3e6t7K5MpjnlUyRFgSI13cj0B2XPqwpnWHQOmadrsEGhQ/0sNxCe9e8t7QI4LZ5BJx/wCNb/p6GN5pr3wgnikIGb7ZA435xnNQOuYTMEuIwjtGwJQtghRvlffUeXR4dubXPRkloytE16GC4YImQ/5VU6nodx/TQwzA90kgGWXcAb8ccCusW7xTQglpuNwJ2/c1neqZrS3jLYYykYDSOWIHJxnjikyuy4yRzrSJ2PVFvK6oBE/hjtXbYEV13TLkSLjNca0+UrdmdtvaLD41vtA1HMignmujFy5RtWoTU5H7kBBzTGqyobc0q8cb0qCyU0QUFTRAaJFWng0IGng1AyHUry6bqi3EbezcnB9zD/HyqmXVZbjWVjvLgpbxMO5dz3HG23p76t/pBGbFJRzDIHz6DG9R+nEsNYiC3ttG7lAGYbE+m9c/LjquniztmkHrfqDUtN1a0vNJvD4Qt+ySPYqd/wCPlWRvOsNY1S+t3kuCFiYEKo8/xrb6z0zp1tGWN7ddq5ARpBx6AkGsYul2plPhTsVzjkfxSa120uN+q0mpdVKLsSWjghj7aHY/jVJr+oySeIkz7kdu/lnmrG4j0zR9OSXwO+4Y93fL7RI+PlWP1G6a5kZ5P9R2LHHvqMJu7U5M7OjXnBKrGPZXzI3NXmhXRWdTms2tXGj5BBrpkcuXbq+mXAkhG9TSazmh3GFCsavw2RzUojxjvSrwmvKCwU0RTQFNEU0SMDTs0IGnd21QMz1p/sm9POsh09qaaJqohnOLdj7LelbPquPxbNx7qweu6cS4cLnbNZ8muttOPfdjqUt1o+oWWbgo4ZdySKzt1a6FYJ3Ikaqu/Oa5xFc3FvmLxXTA232FMu76S4LB5i2PLJrLwrX+nSV1RqUeoXhSLdE228z5VTXUHgsgO7Fck++plrAGcSlcBP1NM1ZCDFJg4wQfzrTHUumeW7Noa1eaOvFUac1faP8A21qyrV6c3YwrSwS9yisvbHGDV3ay+yBUqrEtSoIYUqJWKmiKajI1GVqhI4NOzXtnaz3kgSBCxzufIVpLHRIbfD3B8VvTyoMXqdlJPASVKqfNvMVndQtA6EEV03qm2IgEqLkcGsJcpvxXPyW2unhkkYm60yMkkrjyqrk0qNHxnNbG8iCk7VUzRju4qsq9xisS2UBUUez51KlsUlRVde5T5VIijy3FWsFoWAOOKramSaUNn0fHeTiOOV4i32SNwDUiXpnUtIlxJCZYhuJYgSK6B05p/wBY05HsoMD8a0ccIbOQDXRx267cvJJvUcntjtVlbvxvW6venLG9BLRCOTyePANZq/6YvrJi8I8eP3bEfCtds9AI+3NKogZlJUghhyCOKVBdxHuYKoLE8ADNaHTNCklIe6yqn+wc/GpmjaRDYIGOHnI3fHyq6TAG2KrtaH2kEVtEI4lCj3VI8qAGr3xMVAHOqNE8Uw7o2Hn5Vi9a0GaIs0QLxcgjkfjW1eRT54qI+VP1bbeh4qMsZVscri5TfW8mCCpJqpNpNLJgIRXXLy2tpsma0Un7y4quOm6eDtBJn0GayvHWs5Z6Yew0hjJ7WcVq9N0IyKMr2xjlm/arSCG3hP1VqAR5uR/mpYYsMM2R90DAqZx+1cuXfwasUcUQjhXCL5+tPjFJgTya9XatWQy08gEUINTu8UEO60uzuZO+e3R29SKVSWkGaVDSQsoHnThKPWqyK4WaNJl+yw49KSTF2yBtRK1E3vp3fmocQo4og5jQHJojGgsaBrbihMKKaY3voBEU9BivDjyr0HFA814aWaYxoE74oYl9vHpTXao7PhzvQOmuSJnA/tIH6ClUGJjJPcHnEn7ClQNtbsJdTW2dmPioM+uzY+fxqytmAODWHfUkaKw1EHA278fk381qopSJ8A7c0F6kgxRA+aro5thRjMFGTQSy1DZhUaa58GCSZ/sopbFRdLvWvLYzPtliABTSNzekySSfiGNPxkbHyqHKmquPYu7WP3CAn5tUovVL1J1DDolp3lfEmc4jjz+p91RUjhddjbJubGcfdMTIfzBNGt76ZQRqNuLdgfto/eh+O2PjWBu+ub97VHieCJ+zdRGWZnz5ZGAMe81Ci6+1dDiZLWdCMFXiIz+Rqu/SXWS9DeXFYTpPq62lVrO574cdzoXbKooGcZ9ABWteYFcg5B4Iq2N3ECyTVXyTkT4LbGvJ59jvVJcX4W7iTI3OKkWkeo29rJP48qp3SnHccZwB/Ne1z7qMTajqssalvDhxjtONzz8hXtQP/9k=" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Containner">{/* {console.log(typeof apiData)} */}</div>
    </div>
  );
}

export default Navbar;
