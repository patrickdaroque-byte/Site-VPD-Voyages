<?php
// Sécurité : empêcher l'accès direct
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.html");
    exit;
}

// Récupération des champs du formulaire
$name    = htmlspecialchars($_POST["name"]);
$email   = htmlspecialchars($_POST["email"]);
$message = htmlspecialchars($_POST["message"]);

// Vérification anti-spam (champ caché)
if (!empty($_POST["_gotcha"])) {
    exit; // On ignore les bots
}

// Adresse de réception
$to = "patrick.daroque@gmail.com";

// Sujet de l'email
$subject = "Nouveau message depuis le site VPD Voyages";

// Contenu de l'email
$body = "Nom : $name\nEmail : $email\nMessage :\n$message";

// En-têtes
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

// Envoi
mail($to, $subject, $body, $headers);

// Message de confirmation
echo "<h2>Merci $name ! Votre message a bien été envoyé.</h2>";
echo "<p>Je vous réponds très rapidement.</p>";
echo "<a href='index.html'>Retour au site</a>";
?>
