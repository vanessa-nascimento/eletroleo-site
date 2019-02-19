<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );

	date_default_timezone_set('America/Sao_Paulo');

	$status = array();

	$date = date("d/m/Y h:i");

    // Enter the email where you want to receive the body
    $emailTo = 'eletroleo.site@gmail.com';
    
	// Escape and extract all the post values
	foreach ($_POST as $key => $value) {
		if(is_array($value)) {
			$data[$key] = $value;
		} else {
			$data[$key] = trim(stripslashes($value));
		}
	    
	}

	extract($data);

    $from = $email;
    $to = $emailTo;
    $subject = 'Eletroléo | Site - Solicitação de novo orçamento';
    $headers = "From:" . $from . "\r\n";
    $headers .= "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	$body = '

		<table width="600px" style="width: 500px; border: 1px solid #ddd; border-top: 5px solid #f39c12; border-radius: 5px; margin-top: 50px; margin-bottom: 50px;" align="center" border="0" cellpadding="15px">
			<tr>
				<td colspan="2" style="padding: 15px;">
					<h1 style="text-align: center; margin-bottom: 5px;">
						Novo contato
					</h1>
					<hr style="border-color: #eee;">
				</td>
			</tr>
			<tr>
				<td style="padding: 15px;">
					<strong>Nome:</strong>
				</td>
				<td style="padding: 15px;">
					' . $nome . '
				</td>
			</tr>
			<tr>
				<td style="padding: 15px;">
					<strong>Email:</strong>
				</td>
				<td style="padding: 15px;">
					' . $email . '
				</td>
			</tr>
			<tr>
				<td style="padding: 15px;">
					<strong>Telefone:</strong>
				</td>
				<td style="padding: 15px;">
					' . $telefone . '
				</td>
			</tr>';

			if (isset($mensagem)) {
				$body .= '
					<tr>
						<td style="padding: 15px;">
							<strong>Mensagem:</strong>
						</td>
						<td style="padding: 15px;">
							' . $mensagem . '
						</td>
					</tr>';
			}

	$body .= '
			<tr>
				<td style="padding: 15px;">
					<strong>Data/Hora:</strong>
				</td>
				<td style="padding: 15px;">
					' . $date . '
				</td>
			</tr>
			</table>';


	$result = mail($to,$subject,$body, $headers);

	if ($result) {
        $status['result'] = true;
    } else {
        $status['result'] = false;
    }

	echo json_encode($status);
?>