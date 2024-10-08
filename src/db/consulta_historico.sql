USE tcc-impacta
GO

Create Procedure consulta_historico
As
Begin

	Set NOCOUNT On
	Set QUOTED_IDENTIFIER On

	Select top 100
		cep,
		logradouro,	
		complemento,
		bairro,		
		uf,		
		localidade,
		estado,		
		regiao
	
	From dbo.tb_historico_cep 


End
