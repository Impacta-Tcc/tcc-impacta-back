
If Not Exists (Select top 1 1 
				From sys.objects 
				Where object_id = object_id('[dbo].[tb_historico_cep]') and type in ('U')) 
Begin

	CREATE TABLE [dbo].[tb_historico_cep](
		[id_historico_cep]	[int] Identity(1,1) NOT NULL,
		[cep]				[Varchar](15)	NULL,
		[logradouro]		[Varchar](300)	NULL,
		[complemento]		[Varchar](300)	NULL,
		[bairro]			[Varchar](300)	NULL,
		[localidade]		[varchar](100)	NULL,
		[uf]				[Char](2)		NULL,
		[estado]			[Varchar](25)	NULL,
		[regiao]			[Varchar](25)	NULL
	) ON [PRIMARY]



End

If Not Exists (Select top 1 1 
				From sys.objects o
				Join sys.columns c
				On c.object_id = o.object_id
				Where o.type in ('U','V')
				And o.name = 'tb_historico_cep'
				And c.name = 'id_historico_cep')
Begin

	Alter Table [dbo].[tb_historico_cep] Add [id_historico_cep][int] Identity(1,1) NOT NULL

End

If Not Exists (Select top 1 1 
				From sys.objects o
				Join sys.columns c
				On c.object_id = o.object_id
				Where o.type in ('U','V')
				And o.name = 'tb_historico_cep'
				And c.name = 'cep')
Begin

	Alter Table [dbo].[tb_historico_cep] Add [cep] [varchar](15) NULL

End

If Not Exists (Select top 1 1 
				From sys.objects o
				Join sys.columns c
				On c.object_id = o.object_id
				Where o.type in ('U','V')
				And o.name = 'tb_historico_cep'
				And c.name = 'logradouro')
Begin

	Alter Table [dbo].[tb_historico_cep] Add [logradouro] [varchar](300) NULL

End

If Not Exists (Select top 1 1 
				From sys.objects o
				Join sys.columns c
				On c.object_id = o.object_id
				Where o.type in ('U','V')
				And o.name = 'tb_historico_cep'
				And c.name = 'complemento')
Begin

	Alter Table [dbo].[tb_historico_cep] Add [complemento] [varchar](300) NULL

End

If Not Exists (Select top 1 1 
				From sys.objects o
				Join sys.columns c
				On c.object_id = o.object_id
				Where o.type in ('U','V')
				And o.name = 'tb_historico_cep'
				And c.name = 'bairro')
Begin

	Alter Table [dbo].[tb_historico_cep] Add [bairro] [varchar](300) NULL

End

If Not Exists (Select top 1 1 
				From sys.objects o
				Join sys.columns c
				On c.object_id = o.object_id
				Where o.type in ('U','V')
				And o.name = 'tb_historico_cep'
				And c.name = 'localidade')
Begin

	Alter Table [dbo].[tb_historico_cep] Add [localidade] [varchar](100) NULL

End

If Not Exists (Select top 1 1 
				From sys.objects o
				Join sys.columns c
				On c.object_id = o.object_id
				Where o.type in ('U','V')
				And o.name = 'tb_historico_cep'
				And c.name = 'uf')
Begin

	Alter Table [dbo].[tb_historico_cep] Add [uf] [char](2) NULL

End


If Not Exists (Select top 1 1 
				From sys.objects o
				Join sys.columns c
				On c.object_id = o.object_id
				Where o.type in ('U','V')
				And o.name = 'tb_historico_cep'
				And c.name = 'estado')
Begin

	Alter Table [dbo].[tb_historico_cep] Add [estado] [varchar](25) NULL

End

If Not Exists (Select top 1 1 
				From sys.objects o
				Join sys.columns c
				On c.object_id = o.object_id
				Where o.type in ('U','V')
				And o.name = 'tb_historico_cep'
				And c.name = 'regiao')
Begin

	Alter Table [dbo].[tb_historico_cep] Add [regiao] [varchar](25) NULL

End





