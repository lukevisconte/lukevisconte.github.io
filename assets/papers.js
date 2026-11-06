// =====================================================================
//  YOUR PAPERS — this is the only file you need to edit to add a paper.
// =====================================================================
//
//  To add a paper:
//   1. Put the PDF in the "papers" folder (e.g. papers/my-paper.pdf).
//   2. Copy one { ... } block below, paste it at the top of the list,
//      and change the text between the quotes.
//   3. Every block ends with a comma:  },
//
//  Fields:
//   title     Paper title
//   authors   Optional. Leave "" if it's just you.
//   status    "working"  or  "finished"
//   date      "YYYY-MM" (the version date, e.g. "2026-11")
//   venue     Optional. Journal, conference or course, e.g. "Journal of Finance"
//   abstract  The abstract (one paragraph)
//   pdf       Path to the PDF, e.g. "papers/my-paper.pdf"   ("" for none)
//   code      Link to code/data, e.g. a GitHub repo URL      ("" for none)
//
//  Papers appear in the order listed here when they share the same date.
// =====================================================================

window.PAPERS = [

  {
    title:    "Evaluative Claims: A “Meaningful” Internal Critique of Ogden and Richards",
    authors:  "",
    status:   "working",
    date:     "2026-11",
    venue:    "",
    abstract: "Few phrases carry more weight in ordinary speech, or less content, than “a meaningful life.” We say it at funerals, in commencement speeches, and in moments of reflection, and we say it as though it named something a life could possess or lack. This paper argues that it names nothing. Drawing on C. K. Ogden and I. A. Richards’ The Meaning of Meaning, chiefly their survey of the senses of “meaning” in Chapter IX and their analysis of the ethical “good” in Chapter VI, I argue that the predicate “meaningful,” applied to a life, makes no difference to what a sentence refers to; it expresses an attitude toward a life rather than stating a fact about it. The more interesting claim is that Ogden and Richards possessed every tool needed to reach this conclusion themselves. Having identified an emotive use of “meaning” under their definition XI and having already shown that the ethical “good” “stands for nothing whatever,” they nonetheless classified “the Meaning of Life” as a symbolic phrase, one concerning purpose or significance. A simple test shows this to be a misclassification: read as purpose or significance, the phrase either invents a referent or loses the evaluation that speakers intend, and only the emotive reading, the one later developed by A. J. Ayer, accounts for how it is actually used. The conclusion is narrow. It is not that lives lack value, but that “meaningful” is a convenient device of language, and, as Ogden and Richards themselves warn, a device becomes an error once we suppose it to be “an addition to our knowledge.”",
    pdf:      "papers/ogden-richards-evaluative-claims.pdf",
    code:     "",
  },

  {
    title:    "Where Geometric Brownian Motion Breaks Down: Fat Tails, Volatility Clustering, and Persistent Volatility Shocks in the S&P 500",
    authors:  "",
    status:   "working",
    date:     "2026-10",
    venue:    "",
    abstract: "Geometric Brownian Motion (GBM) remains the baseline model for asset prices, yet its assumptions of normal, independent, constant-volatility returns are rarely accurate descriptions of market behavior. Using 2,519 daily S&P 500 log returns (September 2016–September 2026), this paper shows that these returns violate GBM's assumptions: they are fat-tailed (kurtosis 19.7), volatility clusters, and volatility shocks have a half-life of roughly 100 trading days. Four extensions (Merton jump diffusion, Variance Gamma, Heston, and Bates) are then tested on a common scale using probability integral transform (PIT) residuals. It is made clear then that jump diffusion repairs the shape of returns while stochastic volatility repairs most of the dynamics. Finally, this paper proposes a non-linear barrier jump model in which jump risk rises as prices approach an economic barrier (B). It achieves the highest likelihood and best AIC of all models tested, although BIC still favors Heston due to over-parameterization concerns.",
    pdf:      "papers/where-gbm-breaks-down.pdf",
    code:     "",
  },

  {
    title:    "Repairing Geometric Brownian Motion: A Common PIT-Residual Test of the Merton, Heston, Variance Gamma, and Bates Models",
    authors:  "",
    status:   "working",
    date:     "2026-10",
    venue:    "",
    abstract: "Geometric Brownian Motion (GBM) fails to describe S&P 500 returns in three ways: fat tails, volatility clustering, and persistent volatility shocks. This paper examines four established extensions of GBM (Merton jump diffusion, Heston stochastic volatility, Variance Gamma, and Bates stochastic volatility with jumps) and tests each on the same 2,519 daily S&P 500 log returns (September 2016–September 2026). Because these models do not assume Gaussian returns, they are compared on a common scale using probability integral transform (PIT) residuals, which are i.i.d. N(0,1) under correct specification, with Monte Carlo simulation used for level statistics. The jump models (Merton, Variance Gamma) largely repair the shape of returns, cutting residual kurtosis from 19.7 to below 4, but leave volatility clustering untouched. Heston repairs most of the dynamics and has the best BIC, though it retains negative skew and mean-reverts too quickly. Bates improves the tails further at the cost of more residual clustering, and its jump component is weakly identified. No extension reproduces the full persistence of volatility observed in the data.",
    pdf:      "papers/repairing-gbm.pdf",
    code:     "",
  },

  {
    title:    "A Non-Linear Economic Barrier Jump Model: Drawdown-Dependent Jump Risk in the S&P 500",
    authors:  "",
    status:   "working",
    date:     "2026-10",
    venue:    "",
    abstract: "Standard jump-diffusion models treat jump arrivals as independent of market conditions, yet crashes tend to arrive when prices are already under stress. This paper proposes a non-linear economic barrier jump model: an extension of the Bates model in which both jump intensity and mean jump size depend, through a Gaussian kernel, on the distance between the asset price and an economic barrier (B). In its testable form the barrier is set at 80% of the trailing 252-day high and the kernel is one-sided, so jump risk rises as prices fall toward the barrier. Estimated on 2,519 daily S&P 500 log returns (September 2016–September 2026) and evaluated with the same PIT-residual framework used for the established extensions, the model achieves the highest log-likelihood (8,468.1), the best AIC of all six models tested, and the best tail fit (Jarque-Bera 48.2), and it is noticeably less surprised than Bates on the worst days near the barrier. However, the gain over Bates does not cover BIC’s penalty for three added parameters, volatility dynamics are no better, and with only 73 trading days at or below the barrier the data cannot separate whether barrier-driven risk arrives as more frequent or as larger jumps.",
    pdf:      "papers/barrier-jump-model.pdf",
    code:     "",
  },

];


// =====================================================================
//  COMMENTARIES: shown in their own section, in the order listed here.
//  To add one: put the PDF in papers/commentaries/ and copy a block.
// =====================================================================

window.COMMENTARIES = [

  {
    title:    "Realist Absurdist Perfectionism: Meaning After the Death of God",
    venue:    "Commentary 1",
    status:   "working",
    abstractLabel: "Argument",
    abstract: "This essay examines whether life retains meaning after the death of God. Nietzsche’s proclamation, though often caricatured, was in his eyes a catastrophe: he feared that a secularizing Europe, left with nothing on which to hang its spiritual hats, would slide into Nihilism. The theistic view that a creator sets each life’s meaning is not dismissed, but a meaning imposed by an external force and accepted on its authority, rather than examined and logically derived, is inherited on someone else’s terms. Nietzsche’s fear, while not irrational, was overstated, as human history moves in cycles and rarely spirals to unrecoverable depths. Pessimistic Nihilism is bleak but is not the only form Nihilism takes, and existentialist self-created meaning fails for want of any hierarchy or grounding. Absurdism proves the most tenable position, with one qualification: if life has no meaning and our task is to revolt against the absurd, then the greatest revolt is the unending striving for perfection. This position, Realist Absurdist Perfectionism, is held to be the most attractive, supportable, and logical response to the question of meaning.",
    pdf:      "papers/commentaries/meaning-after-the-death-of-god.pdf",
  },

  {
    title:    "Condemned to Be Free? A Decision-Theoretic Wager on Free Will",
    venue:    "Commentary 2",
    status:   "working",
    abstractLabel: "Argument",
    abstract: "This essay examines whether humans possess free will. Sartre’s claim that man is condemned to be free is read in the context of Being and Nothingness and of occupied France; his examples of bad faith show that we are aware of our roles, but not that we are free to abandon them, and his freedom, as de Beauvoir argued, is too internal and abstract to distinguish feeling free from being free. Determinism fares no better: quantum indeterminacy undermines Laplace’s demon, the most famous neuroscientific evidence against free will may reflect random neural noise rather than hidden decisions, and randomness offers no more control than fate. Compatibilism, even in Frankfurt’s strongest form, cannot escape Schopenhauer’s objection that one cannot will what one wills. Faced with possibilities whose odds cannot be known, the essay turns to decision theory: acting as if free leaves one better off or no worse off, a conclusion that justifies holding individuals responsible and grounds the striving demanded by Realist Absurdist Perfectionism.",
    pdf:      "papers/commentaries/condemned-to-be-free.pdf",
  },

  {
    title:    "Unequal in Value, Assumed Equal in Dignity: Aristotle, Rawls, and the Case for Inequality",
    venue:    "Commentary 3",
    status:   "working",
    abstractLabel: "Argument",
    abstract: "This essay examines whether people are equal, and how they ought to be treated if they are not. It begins from Aristotle’s distinction between geometric equality, under which shares follow merit, and arithmetic equality, under which the law treats all parties as equal, and defends both against the socialist objection that legal equality masks economic inequality and the objection that merit is undefined. Merit is divided into external merit, the value of one’s talents to others, which compensation follows, and internal merit, the sustained striving for perfection relative to one’s capacity, whose reward is internal honor. Rawls receives a full exposition before the critique: his original position strips its choosers of everything human, maximin does not follow from rationality, his appeal to stability ignores the strain placed on the talented, and hypothetical consent is no consent at all. Nozick, Cohen, the regress objection, and Hayek press further, and the egalitarian alternatives of Temkin, Dworkin, Young, and Sandel fare no better. Distinguishing value from dignity, and working through five senses of dignity, the essay concludes that people are unequal in capacity and value and should be rewarded unequally, and that equal dignity, though it cannot be known and is likely false, must be assumed by society for it to function.",
    pdf:      "papers/commentaries/unequal-in-value-equal-in-dignity.pdf",
  },

  {
    title:    "What Pilate Walked Away From: Truth and Fallible Realism",
    venue:    "Commentary 4",
    status:   "working",
    abstractLabel: "Argument",
    abstract: "This essay asks what truth is, beginning from the Correspondence Theory that Aristotle first stated and that most people still assume. It follows the challenges correspondence has faced, from Locke’s secondary qualities, Berkeley’s idealism, and Kant’s things in themselves to Strawson’s doubts about facts and the paradoxes of bivalence, and it examines the main alternatives: verificationism, coherence, deflationism, and pragmatism. Gathering these into two schools, it argues that objectivism fails not because there is no objective truth, but because no one can claim to know it, as the history of overturned beliefs from Kuhn to Laudan shows; relativism, meanwhile, refutes itself and, as Orwell saw, serves those who would impose truths of their own. It concludes for Fallible Realism: the assumption that one objective reality exists, joined to the admission that no human perspective can grasp it fully, so that certainty in any belief becomes the ultimate enemy.",
    pdf:      "papers/commentaries/what-pilate-walked-away-from.pdf",
  },

];
