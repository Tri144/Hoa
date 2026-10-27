
const gift = document.getElementById("gift");
const replay = document.getElementById("replay");
const scene = document.querySelector(".scene");
const title = document.getElementById("title");
const hint = document.getElementById("hint");

function openGift() {
    // Nếu quà đã mở thì không chạy lại
    if (scene.classList.contains("opened")) {
        return;
    }

    // Thêm class để kích hoạt các animation trong CSS
    scene.classList.add("opened");

    // Cập nhật nội dung hiển thị
    title.textContent = "Dành tặng bạn một đóa hoa 🌻";
    hint.textContent = "Mong những điều tốt đẹp sẽ đến với bạn!";
    gift.setAttribute("aria-expanded", "true");
}

function resetGift() {
    // Xóa class mở quà để trở về trạng thái ban đầu
    scene.classList.remove("opened");

    title.textContent = "Bạn có một món quà!";
    hint.textContent = "Chạm vào hộp quà để khám phá nhé 💝";
    gift.setAttribute("aria-expanded", "false");
}

// Nhấn hộp quà để mở
gift.addEventListener("click", openGift);

// Nhấn nút để xem lại
replay.addEventListener("click", resetGift);
