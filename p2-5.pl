parent(pam, bob).
parent(tom, bob).
parent(tom, liz).
parent(bob, ann).
parent(bob, pat).
parent(pat, jim).


% a
male(tom).
male(bob).
male(jim).
female(liz).
female(ann).
female(pat).
female(pam).

% b
happy(X):-parent(X,_).

% c
mother(M,C):-parent(M,C), female(M).
father(F,C):-parent(F,C), male(F).
grandparent(G,C):-parent(G,X), parent(X,C).

% d
% sister(X,Y):-parent(P,X), parent(P,Y), female(X).
sister(X,Y):-parent(P,X), parent(P,Y), female(X), dif(X, Y).

% 祖先
ancestor(X,Z):-parent(X,Z).
ancestor(X,Z):-parent(X,Y), ancestor(Y,Z).