const Texts = {
    null:``,
    content: ``,
    voteContent: ``,
    whiteOrNullContent:``,
    resultsContent:``,
    votationFinished:`
       <h2>Fim da votação</h2>
    `,
    endStageContent: `
        <h2>FIM DA VOTAÇÃO</h2>
        <p>Prossiga para a contagem dos votos ou inicie uma nova votação</p>
    `,
    buttons: `
        <input type="button" value="Branco" id="white-btn" class="white-btn control-btn">
        <input type="button" value="Corrige" id="erase-btn" class="erase-btn control-btn">
        <input type="button" value="Confirma" id="confirm-btn" class="confirm-btn control-btn">
        <input type="button" value="Novo Eleitor" id='voteAgainBtn' class="white-btn control-btn hidden">
        <input type="button" value="Finalizar Votação" id='writeVotesBtn' class="confirm-btn control-btn hidden">
        <input type="button" value="Ver resultados" id='seeResults' class="white-btn control-btn hidden">
        <input type="button" value="Nova votação" id='newVotationBtn' class="confirm-btn control-btn hidden">
    `,
    votes:{
        stateRepresentative:"",
        congressman:"",
        senator:"",
        governor:"",
        president:""
    },
    setContent: content => {
        Texts.content =`
            <h2 class='votation-title'>${content.post}</h2>
            <div class='row'>
                <div class='col c50'>
                    <img src='${content.photoUrl}' alt='Foto do candidato' class='candidate_photo'  />
                    <h2>${content.name}</h2>
                </div>
                <div class='col c50 candidate_info'>
                    <p><span>Partido:</span> ${content.party}</p>
                    <p><span>Número:</span> ${content.number}</p>
                </div>
            </div>
            <br>
      `
    },
    setVoteContent: content => {
        Texts.voteContent =`
            <p>Votação para: </p>
            <h2>${content.post}</h2>
            <p>Números Digitados: </p>
            <span class='digited-number'></span>
        `   
    },
    setWhiteOrNullContent: content => {
        Texts.whiteOrNullContent = `
            <div class='whiteOrNullVoteArea'>
                <div>
                    <p>Votação para: </p>
                    <h2>${content.post}</h2>
                </div>
                <div>
                    <p>Voto escolhido:</p>
                    <span class='digited-number'><b>${content.name}</b></span>
                </div>
            </div>
        `
    },
    setStateRepresentativeContent: content => {
        content = content.stateRepresentative 
        content.forEach(candidato => {
            Texts.votes.stateRepresentative += candidato
        });

    },
    setCongressman: content => {
        content = content.congressman 
        content.forEach(candidato => {
            Texts.votes.congressman += candidato
        });
    },
    setSenator: content => {
        content = content.senator 
        content.forEach(candidato => {
            Texts.votes.senator += candidato
        });    
    },
    setGovernor: content => {
        content = content.governor 
        content.forEach(candidato => {
            Texts.votes.governor += candidato
        });      
    },
    setPresident: content => {
        content = content.president 
        content.forEach(candidato => {
            Texts.votes.president += candidato
        });     
    },
    setResultsContent: content => {
        Texts.setStateRepresentativeContent(content)
        Texts.setCongressman(content)
        Texts.setSenator(content)
        Texts.setGovernor(content)
        Texts.setPresident(content)
        Texts.resultsContent = `
        <div class='row'>
            <div class='col c50'>
                <small>Votação para:</small>
                <h2>Deputado Federal</h2>
                ${Texts.votes.stateRepresentative}
            </div>
            <div class='col c50'>
                <small>Votação para:</small>
                <h2>Deputado Estadual</h2>
                ${Texts.votes.congressman}
            </div>
        </div>
        <div class='row'>
            <div class='col c50'>
                <small>Votação para:</small>
                <h2>Senador</h2>
                ${Texts.votes.senator}
            </div>
            <div class='col c50'>
                <small>Votação para:</small>
                <h2>Governador</h2>
                ${Texts.votes.governor}
            </div>
        </div>
        <div class='row'>
            <div class='col c100'>
                <small>Votação para:</small>
                <h2>Presidente</h2>
                ${Texts.votes.president}
            </div>
        </div>
        `
    }
}

export {Texts}