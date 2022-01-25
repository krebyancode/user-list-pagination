const tbody = document.getElementById("tbodyUserList");
const pageChange = document.getElementById("page_change");

const page = 1;
window.onload = () => {
  getApiUserList(page);
  // setInterval(getApiUserList, 5000);
};

pageChange.addEventListener("click", () => {
  pageNo();
});

const pageNo = () => {
  if (pageChange.innerText == "Next Page") {
    getApiUserList(2);
    pageChange.innerText = "Previous Page";
  } else {
    getApiUserList(1);
    pageChange.innerText = "Next Page";
  }
};

const getApiUserList = async (pageNo) => {
  tbody.innerHTML = "";
  showLoading();
  // const responseData = await axios({
  //     url: "https://reqres.in/api/users?page=1",
  //     method: "get"
  // });

  const responseData = await axios.get(
    `https://reqres.in/api/users?page=${pageNo}`
  );

  //   console.log(responseData.data.data);
  if (responseData.data.data[0].id == undefined) {
    alert("userlist not found!");
    removeLoading();
  } else {
    for (let i = 0; i < responseData.data.data.length; i++) {
      tbody.innerHTML += ` <tr>
            <td>
            <img src="${responseData.data.data[i].avatar}"/>
            </td>
            <td>
            ${responseData.data.data[i].id}
            </td>
            <td>
            ${responseData.data.data[i].email}
            </td>
            <td>
            ${responseData.data.data[i].first_name}
            </td>
            <td>
            ${responseData.data.data[i].last_name}
            </td>
     </tr>`;
      removeLoading();
    }
  }
};
