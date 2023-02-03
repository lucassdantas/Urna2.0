const RestartVotes = (i, Stages, Texts, Render) => {
    i = 0 
    Stages.presentStep = "Selecting"
    Texts.setVoteContent(Stages.data[i])
    Render('.screen', Texts.voteContent)
}

export {RestartVotes}