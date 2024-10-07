Create Procedure inserir_historico
(
	@cep			Varchar(15)	 Null,
	@logradouro		Varchar(300) Null,
	@complemento	Varchar(300) Null,
	@bairro			Varchar(300) Null,
	@localidade		Varchar(100) Null,
	@uf				Char(2)		 Null,
	@estado			Varchar(25)	 Null,
	@regiao			Varchar(25)	 Null
)
As
Begin

	Set NOCOUNT On
	Set QUOTED_IDENTIFIER On

	Insert into dbo.tb_historico_cep 
	(
		cep,
		logradouro,	
		complemento,
		bairro,		
		uf,		
		localidade,
		estado,		
		regiao	
	)
	Select
		cep				= @cep			
		,logradouro		= @logradouro	
		,complemento	= @complemento	
		,bairro			= @bairro		
		,uf				= @uf			
		,localidade		= @localidade	
		,estado			= @estado		
		,regiao			= @regiao		


End
