const terminal = document.getElementById("terminal");
const loveSong = document.getElementById("loveSong");

const lines = [
  "[*] Initializing secure terminal...",
  "[*] Boot sequence complete.",
  "[*] Establishing connection to target...",
  "[+] Connection established: 192.168.0.❤️",
  "[*] Handshake complete.",
  "[*] Performing vulnerability scan...",
  "[+] Vulnerability found: too_cute_to_ignore",
  "[*] Exploiting weak spot...",
  "[*] Bypassing emotional firewall...",
  "[*] Injecting payload...",
  "[+] Payload deployed successfully.",
  "[*] Executing: affection_protocol.sh",
  "[*] Downloading emotional data packets...",
  "[+] 1024MB affection loaded",
  "[*] Running deep feeling scan...",
  "[+] Match found: you’re special",
  "[*] Encrypting admiration...",
  "[*] Sending virtual flowers...",
  "[*] Creating symbolic link: /you → /my_heart",
  "[*] Overclocking heartbeat...",
  "[*] Monitoring response...",
  "[*] Processing cute reaction...",
  "[+] Target blushed (code: #FFB6C1)",
  "[*] Logging into memory bank...",
  "[+] File saved: sweet_moment.log",
  "[*] Compiling care_package...",
  "[*] Uploading package to: /you/soul",
  "[+] Upload success (100%)",
  "[*] Installing long_term_affection_module...",
  "[*] Module installed.",
  "[*] Activating romantic_audio_payload...",
  "",
  "[!] WARNING: You have been hacked...",
  "[!] ...with love.",
  "[*] Now playing surprise soundtrack."
];

let index = 0;
let charIndex = 0;
let typing;

function typeNextLine() {
  if (index >= lines.length) {
    lovesong.currentTime = 0;
    lovesong.play();
    return;
  }

  const line = lines[index];
  if (charIndex < line.length) {
    terminal.innerHTML += line.charAt(charIndex);
    charIndex++;
    typing = setTimeout(typeNextLine, 30);
  } else {
    terminal.innerHTML += "\n";
    index++;
    charIndex = 0;
    typing = setTimeout(typeNextLine, 80);
  }
}

function startHack() {
  clearTimeout(typing);
  lovesong.pause();
  lovesong.currentTime = 0;
  terminal.innerHTML = "";
  index = 0;
  charIndex = 0;
  typeNextLine();
}

window.addEventListener("load", () => {
  terminal.innerText = "Click here to initiate secure hack...";
});

terminal.addEventListener("click", startHack);
